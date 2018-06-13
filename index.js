const IOTA = require('iota.lib.js')
const iota = new IOTA({
    host: 'http://node01.iotatoken.nl:14265',
    port: 14265
})

const DEPTH = 3;
const MINWEIGHT = 16; // PoW difficulty

const seed = "OKKGZMWEWOMCSD9PTPGNMRJCROFDCAHOFMIRFCRJIJSFAOCHWO9GFDSXFHCQD9DPWFHOVRYKFYZPZFWSX";
const myAddress = "AQJFGBHRLKWSGDGPOWAH9XWZJMUEISJVMERTBLVJYIDQADDOB9VATPJJYKCHPLRBTVXQXZQYTSURRD9SY";

const transfers = [
   {
      address: myAddress,
      value: 0,
      message: iota.utils.toTrytes('W IOTA (part 2)!')
   }
]
const options = {
    inputs: []
}

iota.api.sendTransfer(seed, DEPTH, MINWEIGHT, transfers, options, (error, transactions) => {
    if (error) {
        console.error('sendTransfer error', error, transfers, options);
    } else {
        console.log('transactions sent!', transactions);
    }
});
