// @flow
import tokenList from './tokenList.json'

export const NEON_WALLET_RELEASE_LINK =
  'https://github.com/CityOfZion/neon-wallet/releases'

export const ASSETS = {
  NEO: 'NEO',
  GAS: 'GAS'
}

export const SEND_MODAL_SIZES = {
  ADD_RECIPIENT: '350px',
  EXPANDED_PRIORITY_FEE: '485px'
}

export const EXPLORERS = {
  NEO_TRACKER: 'Neotracker',
  NEO_SCAN: 'Neoscan',
  ANT_CHAIN: 'Antchain'
}

export const ROUTES = {
  HOME: '',
  DASHBOARD: '/dashboard',
  CREATE_WALLET: '/create',
  ENCRYPT_KEY: '/encrypt-key',
  LOGIN_PRIVATE_KEY: '/login-private-key',
  LOGIN_LOCAL_STORAGE: '/login-local-storage',
  LOGIN_LEDGER_NANO_S: '/login-ledger-nano-s',
  LOGIN_NEP2: '/login-encrypted',
  LOGIN_TOKEN_SALE: '/login-token-sale',
  TOKEN_SALE: '/token-sale',
  SETTINGS: '/settings',
  DISPLAY_WALLET_KEYS: '/display-wallet-keys'
}

export const NOTIFICATION_LEVELS = {
  ERROR: 'error',
  SUCCESS: 'success',
  INFO: 'info',
  WARNING: 'warning'
}

export const NOTIFICATION_POSITIONS = {
  TOP_CENTER: 'tc',
  TOP_RIGHT: 'tr',
  TOP_LEFT: 'tl',
  BOTTOM_CENTER: 'bc',
  BOTTOM_RIGHT: 'br',
  BOTTOM_LEFT: 'bl'
}

export const BIP44_PATH =
  '8000002C' + '80000378' + '80000000' + '00000000' + '00000000'

export const MODAL_TYPES = {
  SEND: 'SEND',
  RECEIVE: 'RECEIVE',
  CONFIRM: 'CONFIRM',
  TOKEN_INFO: 'TOKEN_INFO',
  TOKEN: 'TOKEN',
  ICO: 'ICO',
  ENCRYPTED_LOGIN: 'ENCRYPTED_LOGIN'
}

export const MAIN_NETWORK_ID = '1'
export const TEST_NETWORK_ID = '2'
export const COZ_TEST_NETWORK_ID = '3'
export const GOLDI_NETWORK_ID = '4'

// TestNet
export const TOKENS_TEST = {
  DBC: 'b951ecbbc5fe37a9c280a76cb0ce0014827294cf',
  RPX: '5b7074e873973a6ed3708862f219a6fbf4d1c411',
  QLC: '0d821bd7b6d53f5c2b40e217c6defc8bbe896cf5',
  LOCK: 'c36a622ad044df617634460a0f68e9023c0aa4aa'
}

// MainNet
export const TOKENS = tokenList

// GoldiNet
export const TOKENS_GOLDI = {
}

export const ENDED_ICO_TOKENS = [
  'DBC',
  'RPX',
  'RHT',
  'QLC',
  'NRVE',
  'IAM',
  'ONT',
  'THOR',
  'CGE',
  'AVA',
  'SWH',
  'SWTH',
  'EFX',
  'MCT',
  'PKC',
  'PEGUSD'
  // 'SOUL', 'ASA', 'SPOT'
]

export const DEPRECATED_TOKENS = [
  '4b4f63919b9ecfd2483f0c72ff46ed31b5bbb7a4' // Phantasma SOUL
  // 'a0b328c01eac8b12b0f8a4fe93645d18fb3f1f0a', // NKN
  // '7ac4a2bb052a047506f2f2d3d1528b89cc38e8d4', // quarteria
  // '23501e5fef0f67ec476406c556e91992323a0357', // Orbis
  // '442e7964f6486005235e87e082f56cd52aa663b8', // Ontology
  // '2e25d2127e0240c6deaf35394702feb236d4d7fc' // Narrative
  // '6d36b38af912ca107f55a5daedc650054f7e4f75' // Aphelion
]

export const DEFAULT_WALLET = {
  name: 'userWallet',
  version: '1.0',
  scrypt: {
    cost: 16384,
    blockSize: 8,
    parallel: 8,
    size: 64
  },
  accounts: [],
  extra: null
}

export const DEFAULT_CURRENCY_CODE = 'usd'

export const CURRENCIES = {
  aud: { symbol: '$' },
  brl: { symbol: 'R$' },
  cad: { symbol: '$' },
  chf: { symbol: 'Fr.' },
  clp: { symbol: '$' },
  cny: { symbol: '¥' },
  czk: { symbol: 'Kč' },
  dkk: { symbol: 'kr. ' },
  eur: { symbol: '€' },
  gbp: { symbol: '£' },
  hkd: { symbol: '$' },
  huf: { symbol: 'Ft ' },
  idr: { symbol: 'Rp ' },
  ils: { symbol: '₪' },
  inr: { symbol: '₹' },
  jpy: { symbol: '¥' },
  krw: { symbol: '₩' },
  mxn: { symbol: '$' },
  myr: { symbol: 'RM' },
  nok: { symbol: 'kr ' },
  nzd: { symbol: '$' },
  php: { symbol: '₱' },
  pkr: { symbol: '₨ ' },
  pln: { symbol: 'zł' },
  rub: { symbol: '₽' },
  sek: { symbol: 'kr ' },
  sgd: { symbol: 'S$' },
  thb: { symbol: '฿' },
  try: { symbol: '₺' },
  twd: { symbol: 'NT$' },
  usd: { symbol: '$' },
  zar: { symbol: 'R ' }
}
