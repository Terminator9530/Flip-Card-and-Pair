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

function makePair(A){
    A=shuffle(A.concat(A));
    console.log(A);
    return A;
}

function shuffleCards() {
    var tempCount = 0;
    var tempArr = shuffle(arr).slice(0,10);
    var tempArr=makePair(tempArr);
    document.querySelectorAll("img").forEach(item => {
        console.log(item);
        item.src = `img/${tempArr[tempCount++]}.png`;
    });
    tempCount = 0;
    document.querySelectorAll(".front").forEach(item => {
        console.log(item);
        item.setAttribute("onclick", `flip(${tempCount},'${tempArr[tempCount++]}')`);
        item.setAttribute("style", `background:rgb(${randomColor()},${randomColor()},${randomColor()})`);
    });
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
    count = 0,
    a, b;

function flip(index, val) {
    document.querySelectorAll(".front")[index].classList.add("flipfront");
    if (prev.val == "") {
        prev.val = val;
        prev.index = index;
        console.log("prev : ", prev.val, "curr : ", curr.val, "original : ", val);
    } else {
        curr.val = val;
        curr.index = index;
        console.log("prev : ", prev.val, "curr : ", curr.val, "original : ", val);
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
            if (count == 10) {
                document.getElementById("pop-up").classList.add("animate");
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
            setTimeout(function () {
                document.querySelectorAll(".front")[a].classList.remove("flipfront");
                document.querySelectorAll(".front")[b].classList.remove("flipfront");
            }, 1000);
        }
    }
}