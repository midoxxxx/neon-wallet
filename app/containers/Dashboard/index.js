// @flow
import { connect, type MapStateToProps } from 'react-redux'
import { bindActionCreators } from 'redux'
import { compose } from 'recompose'
import { withReset, withActions } from 'spunky'

import dashboardActions from '../../actions/dashboardActions'
import accountActions from '../../actions/accountActions'
import withInitialCall from '../../hocs/withInitialCall'
import withAuthData from '../../hocs/withAuthData'
import withCurrencyData from '../../hocs/withCurrencyData'
import withNetworkData from '../../hocs/withNetworkData'
import withFilteredTokensData from '../../hocs/withFilteredTokensData'
import { getNotifications } from '../../modules/notifications'
import { showModal } from '../../modules/modal'
import withLoadingProp from '../../hocs/withLoadingProp'
import withSuccessNotification from '../../hocs/withSuccessNotification'
import withFailureNotification from '../../hocs/withFailureNotification'
import balancesActions from '../../actions/balancesActions'

import Dashboard from './Dashboard'

const mapStateToProps: MapStateToProps<*, *, *> = (state: Object) => ({
  notification: getNotifications(state)
})

const actionCreators = {
  showModal
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(actionCreators, dispatch)

const mapAccountActionsToProps = (actions, props) => ({
  loadWalletData: () =>
    actions.call({
      net: props.net,
      address: props.address,
      tokens: props.tokens
    })
})

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),

  // Expose function for polling & reloading account related data.
  withAuthData(),
  withNetworkData(),
  withCurrencyData('currency'),
  withFilteredTokensData(),
  withInitialCall(dashboardActions),
  withReset(accountActions, ['networkId']),
  withActions(accountActions, mapAccountActionsToProps),
  withLoadingProp(balancesActions)
)(Dashboard)
