module.exports = {
    name: "spotify",
    description: "gives you spotify accounts",
    run: async (client, message, args) => {
      message.author.send("Here is your Spotify Account, If now working please open a ticket in the server!")
var string = `tedgaresteban2009@hotmail.com:503mrpelon 
caleb.bryce.scott@gmail.com:Kickflip1 
chanericyk@gmail.com:Y2351925 
ac1des@orange.fr:Se3yxRy4 cherise-
mayte@hotmail.com:Lincoln1 
blanketchildren@gmail.com:50833000 
george.warner@live.com:Anderson11 
lena84k@gmail.com:koza1984 
lioneltoribio495@gmail.com:Danilo1991 
mahosum@hotmail.com:Sam19950107 
randysesariojr@gmail.com:ninja3221 
michael.t.levy@gmail.com:coco1234 
sngo2687@gmail.com:cat0dogs 
jacquelinehermawan@live.com:Tarakanita25  
rajeev.bhagavatula@gmail.com:rajaashi1 
Hockeygoal123@gmail.com:hedgehog31 
bceebill@bigpond.com:Wenatchee5036 
mitchell_R_S@hotmail.com:mitchell9 
tigera1@hotmail.com:tyler7399 
Bennikalli01@icloud.com:Benni1307 
sk_randhawa@hotmail.com:Austin316 
zacottaway@gmail.com:Starwars10 
s.madorski@gmail.com:photo21253 
yussef.mobarak@yahoo.com:Bigfish1 
krplatt@att.net:Gemmablue1 
gs1983@live.com.au:1eighty2 
Marcus4994@yahoo.com:Football49 
andersonreggie96@gmail.com:4Budda33 
loicallavos@gmail.com:Tango1205 
ericlevesque559@gmail.com:El908301 
john.bactol@gmail.com:johnmmb1`
    var words = string.split('\n');
    let random = words[Math.floor(Math.random()*words.length)];
    message.author.send(`${random}`);

    }
}