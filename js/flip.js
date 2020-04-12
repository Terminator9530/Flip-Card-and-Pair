function randomColor() {
    return Math.random() * (255 - 0) + 0;
}

var arr = ['001-webinar',
    '002-connect',
    '003-smarthouse',
    '004-slack',
    '005-interface',
    '006-airport',
    '007-mail',
    '008-hierarchy',
    '009-location',
    '010-location',
    '011-job',
    '012-cloud',
    '013-group',
    '014-devices',
    '015-login',
    '016-smart',
    '017-group',
    '018-browser',
    '019-bandwidth',
    '020-microphone',
    '021-countdown',
    '022-big data',
    '023-application',
    '024-fax',
    '025-chat',
    '026-emails',
    '027-content writing',
    '028-cafe',
    '029-folder',
    '030-analysis',
    '031-trello',
    '032-camera',
    '033-alarm',
    '034-team viewer',
    '035-article',
    '036-account',
    '037-world',
    '038-line',
    '039-telework',
    '040-cloud server',
    '041-keyboard',
    '042-error 404',
    '043-monitor',
    '044-devices',
    '045-ratio',
    '046-connect',
    '047-smart car',
    '048-videocall',
    '049-task',
    '050-cloud server'
];

var victory = ['001-lego.png',
    '002-lego.png',
    '003-lego.png',
    '004-lego.png',
    '005-lego.png',
    '006-lego.png',
    '007-lego.png',
    '008-lego.png',
    '009-lego.png',
    '010-lego.png',
    '011-lego.png',
    '012-lego.png',
    '013-lego.png',
    '014-lego.png',
    '015-lego.png',
    '016-lego.png',
    '017-lego.png',
    '018-lego.png',
    '019-lego.png',
    '020-lego.png',
    '021-lego.png',
    '022-lego.png',
    '023-lego.png',
    '024-lego.png',
    '025-lego.png',
    '026-ninja.png',
    '027-cowboy.png',
    '028-knight.png',
    '029-explorer.png',
    '030-scuba diver.png',
    '031-clown.png',
    '032-boy.png',
    '033-native american.png',
    '034-cashier.png',
    '035-spy.png',
    '036-mariachi.png',
    '037-pirate.png',
    '038-fisherman.png',
    '039-cyborg.png',
    '040-vampire.png',
    '041-businessman.png',
    '042-conquistador.png',
    '043-DJ.png',
    '044-american football player.png',
    '045-cheerleader.png',
    '046-santa claus.png',
    '047-diver.png',
    '048-thespian.png',
    '049-man.png',
    '050-man.png',
    '051-cowgirl.png',
    '052-caveman.png',
    '053-witch.png',
    '054-vampire.png',
    '055-queen.png',
    '056-gnome.png',
    '057-injured.png',
    '058-thief.png',
    '059-hiker.png',
    '060-devil.png',
    '061-desert.png',
    '062-ninja.png',
    '063-batman.png',
    '064-superman.png',
    '065-wolverine.png',
    '066-Spiderman.png',
    '067-dummy.png',
    '068-magician.png',
    '069-thor.png',
    '070-deadpool.png',
    '071-businessman.png',
    '072-woman.png',
    '073-mummy.png',
    '074-singer.png',
    '075-Mohawk.png',
    '076-explorer.png',
    '077-dentist.png',
    '078-hip hop.png',
    '079-surgeon.png',
    '080-priest.png'
];

function shuffle(arra1) {
    var ctr = arra1.length,
        temp, index;

    // While there are elements in the array
    while (ctr > 0) {
        // Pick a random index
        index = Math.floor(Math.random() * ctr);
        // Decrease ctr by 1
        ctr--;
        // And swap the last element with it
        temp = arra1[ctr];
        arra1[ctr] = arra1[index];
        arra1[index] = temp;
    }
    return arra1;
}

function makePair(A) {
    A = shuffle(A.concat(A));
    console.log(A);
    return A;
}

function shuffleCards() {
    var tempCount = 0;
    var tempArr = shuffle(arr).slice(0, 10);
    var tempArr = makePair(tempArr);
    document.querySelectorAll("img").forEach(item => {
        //console.log(item);
        item.src = `img/${tempArr[tempCount++]}.png`;
    });
    tempCount = 0;
    document.querySelectorAll(".front").forEach(item => {
        //console.log(item);
        item.setAttribute("onclick", `flip(${tempCount},'${tempArr[tempCount++]}')`);
        item.setAttribute("style", `background:rgb(${randomColor()},${randomColor()},${randomColor()})`);
    });
    document.getElementById("vic").src = "./img/victory/" + victory[Math.floor(Math.random() * (victory.length - 0) + 0)];
}


function hide() {
    document.getElementById("pop-up").classList.remove("animate");
    window.location.reload(true);
}
var prev = {
        val: "",
        index: ""
    },
    curr = {
        val: "",
        index: ""
    },
    count = 0,reflip=true,
    a, b;

function flip(index, val) {
    if(!reflip)
    return;
    document.querySelectorAll(".front")[index].classList.add("flipfront");
    document.querySelectorAll(".back")[index].classList.add("flipback");
    if (prev.val == "") {
        prev.val = val;
        prev.index = index;
       // console.log("prev : ", prev.val, "curr : ", curr.val, "original : ", val);
    } else {
        reflip=false;
        curr.val = val;
        curr.index = index;
        //console.log("prev : ", prev.val, "curr : ", curr.val, "original : ", val);
        if (prev.val == curr.val) {
            console.log("correct");
            count++;
            prev = {
                val: "",
                index: ""
            };
            curr = {
                val: "",
                index: ""
            };
            reflip=true;
            if (count == 10) {
                document.getElementById("pop-up").classList.add("animate");
                document.getElementById("vic").classList.add("animateAvatar");
            }
        } else {
            console.log("Incorrect");
            a = prev.index;
            b = curr.index;
            prev = {
                val: "",
                index: ""
            };
            curr = {
                val: "",
                index: ""
            };
            console.log("first");
            setTimeout(function () {
                document.querySelectorAll(".front")[a].classList.remove("flipfront");
                document.querySelectorAll(".front")[b].classList.remove("flipfront");
                document.querySelectorAll(".back")[a].classList.remove("flipback");
                document.querySelectorAll(".back")[b].classList.remove("flipback");
                reflip=true;
                console.log("last");
            }, 1000);
        }
    }
}