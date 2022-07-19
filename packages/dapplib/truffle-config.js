require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good clock bottom solution mansion creek stick mad grid kitchen sun strike'; 
let testAccounts = [
"0x34274daffb6827e5384d2bce02a0f2fbf3d37cbf9b796e62b3247eed741a8e4e",
"0xded0e4cf1de2735782c224734741e1ee0ba07fb00fd637a40ed2578ebf67025d",
"0xf8f5fa605afe12e25d7aae119500e9635ea251fadacb687cd7ab5fedfaabd33a",
"0xe146ed04e5bc0a8894fdb02bf21f61dfbb5a9ddd67420b7d46d6de962d121b59",
"0x5297f9a66b363421ed905cc594be0ba6ed1653676cb891cf39558a4324721f1f",
"0xf9be473441175bd0e0b8e1566df27ec995adf49b0c1e8597c9f36fc10dad8d77",
"0xa20b1932f28d289d16f83757b4d4fa46ca04658177ff98f9680c9370eae9a6b9",
"0x59ecf33b0c5df77c171ea668b0630dd201aca083b061d92c21c6646974e60425",
"0xcc7a2d2fee7c1546ec34fbd5f3ed8687d7e8f6d017388bb704148c23755f692b",
"0xeecaa147676b1042e2059d5673cebf070337e6667b905bad1c5e68795884e53e"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

