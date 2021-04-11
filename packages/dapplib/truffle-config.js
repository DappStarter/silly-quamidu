require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/lib/wallet-provider');


let mnemonic = 'inflict enter brand venture strike rival mad pudding good praise army gauge'; 
let testAccounts = [
"0xe00a9173ce69fdf6f7f6514f05005680b8ab5b71f30a53449a964e93befb807b",
"0x28333a8c2e3d56ea449148175f641cad1c8d2a35d032c1917f9ef689c7afbaba",
"0x7c17dba4b2fe3bcf5805e69a51e04a638d4f0cb494d18de07b22bd38c08d37cc",
"0xc3c1a6ffe11088ac34653f74d89569bc8b3c2bafcfd459dbaa74772fc3f1a9b2",
"0xc0f7c34d0b2e07cd6980f2d81785f29d88a75033062bf7ef6852fd49e84ee7c4",
"0xd6fe8acb52c27b0b7e5d5216f43954960d25d0477dd43edebdccb94ca9326c14",
"0x1e72dd32d7c773b8a9badd686eccbdeaa824f9036741dadc22b5325676b91e68",
"0x556c2f35ffb17e901b154b4db4273fdf9076a893194ac9ccac03ff13749ca145",
"0x765c1c8c53581e9f476347907f56bc379f60015f3b35fe1a22249035a4f25b46",
"0xb1aaf8de009557f9b8dde0d643433938d76d1587e7a312b3929607f1903bb707"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

