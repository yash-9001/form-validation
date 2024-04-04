const submitbtn = document.getElementById('submit');
const savebtn = document.getElementById('savechanges');
let name = document.getElementById('name');
let username = document.getElementById('username');
// let age = document.getElementById('age');
let contact = document.getElementById('contact');
let email = document.getElementById('email');
let password = document.getElementById('password');
let gender = document.forms['form-validate']['gender'];
let check1 = document.getElementById('check1');
let check2 = document.getElementById('check2');
let check3 = document.getElementById('check3');
let check4 = document.getElementById('check4');
let technology = document.getElementById('select');
let defaulttech = document.getElementById('selecttech');
let language = document.getElementById('language');
let namewarn = document.getElementById('warnname');
let usernamewarn = document.getElementById('warnuser');
let agewarn = document.getElementById('warnage');
let contactwarn = document.getElementById('warncontact');
let emailwarn = document.getElementById('warnemail');
let passwordwarn = document.getElementById('warnpassword');
let genderwarn = document.getElementById('warngender');
let languagewarn = document.getElementById('warnlanguage');
let technologywarn = document.getElementById('warntechnology');
const arrlanguage = [check1, check2, check3, check4];
let requiredData = document.getElementById('requiredData');
let mailpattern = /^[a-zA-Z0-9]+@[^ ]+\.[a-z]{2,3}$/;
let patternpass = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
let bdate = document.getElementById('birthdate');
let bdatewarn = document.getElementById('warnbirthdate');
let fdate1 = document.getElementById('date1');
let fdate2 = document.getElementById('date2');
const filterBtn = document.getElementById('filterbtn');
const removeFilterbtn = document.getElementById('removefilterbtn');
let filteredData = document.getElementById('seeFilteredData');
let tableData = document.getElementById('demo');
let paginationData = document.getElementById('paginationData');

const dataArray = []
technology.onclick = () => {
    document.getElementById('selecttech').style.display = "none";
}

name.onkeyup = () => {
    if (!name.value || !name.value.trim()) {
        namewarn.style.display = "block";
        namewarn.innerHTML = "Please enter your Name";
    } else {
        namewarn.style.display = "none";
        console.log("Valid name");
        return;
    }
}

let patternuser = /^[a-z0-9]+$/;
username.onkeyup = () => {
    if (!username.value) {
        usernamewarn.style.display = "block";
        usernamewarn.innerHTML = "Please enter your Username";
    } else {
        if (!username.value.match(patternuser)) {
            usernamewarn.style.display = "block";
            usernamewarn.innerHTML = "Please use only small letters";
        } else {
            usernamewarn.style.display = "none";
        }
    }
}

// age.onkeyup = () => {
//     if (!age.value) {
//         agewarn.style.display = "block";
//         agewarn.innerHTML = "Please enter your age";
//     } else {
//         if (age.value <= 18 || age.value >= 120) {
//             agewarn.style.display = "block";
//             agewarn.innerHTML = "Age must be between 18 and 120";
//         } else {
//             agewarn.style.display = "none";
//         }
//     }
// }

contact.onkeyup = () => {
    if (!contact.value) {
        contactwarn.style.display = "block";
        contactwarn.innerHTML = "Please enter your contact number";
    } else {
        if (contact.value.length !== 10) {
            contactwarn.style.display = "block";
            contactwarn.innerHTML = "Contact number must be 10 digits";
        } else {
            contactwarn.style.display = "none";
        }
    }
}

email.onkeyup = () => {
    if (email.value.match(mailpattern)) {
        emailwarn.style.display = "none";
        // requiredData.style.display = "none";
    } else {
        emailwarn.style.display = "block";
        emailwarn.innerHTML = "Invalid Email";
    };
}

password.onkeyup = () => {
    if (password.value.match(patternpass)) {
        passwordwarn.style.display = "none";
    } else {
        passwordwarn.style.display = "block";
        passwordwarn.innerHTML = "Password must contain Capital letters, small letters and numbers";
    }
}

arrlanguage.forEach((x) => {
    x.oninput = () => {
        languagewarn.style.display = "none";
    }
})

technology.onfocus = () => {
    technologywarn.style.display = "none";
}

bdate.onfocus = () => {
    bdatewarn.style.display = "none";
}


submitbtn.onclick = (event) => {
    const obj = {};
    if (!name.value || !username.value || !contact.value || !email.value || !password.value || !bdate.value || !technology.value || (!check1.checked && !check2.checked && !check3.checked && !check4.checked)) {
        event.preventDefault();
    };

    // -------------------------------------------Name-----------------------

    if (!name.value || !name.value.trim()) {
        event.preventDefault();
        namewarn.style.display = "block";
        namewarn.innerHTML = "Please enter your Name"
    } else {
        namewarn.style.display = "none";
        console.log("Valid name");
        obj.name = name.value;
        console.log(obj);
    }

    // -------------------------------------------BirthDate-----------------------

    if (!bdate.value) {
        event.preventDefault();
        bdatewarn.style.display = "block";
        bdatewarn.innerHTML = "Please select your BirthDate.";
    } else {
        bdatewarn.style.display = "none";
    }

    // -------------------------------------------userName-----------------------
    let patternuser = /^[a-z0-9]+$/
    if (!username.value) {
        event.preventDefault();
        usernamewarn.style.display = "block";
        usernamewarn.innerHTML = "Please enter your Username";
    } else {
        if (!username.value.match(patternuser)) {
            event.preventDefault();
            usernamewarn.style.display = "block";
            usernamewarn.innerHTML = "Please use only small letters";
        } else {
            usernamewarn.style.display = "none";
            obj.username = username.value;
        }
    };

    // -------------------------------------------AGE-----------------------

    // if (!age.value) {
    //     event.preventDefault();
    //     agewarn.style.display = "block";
    //     agewarn.innerHTML = "Please enter your age";
    // } else {
    //     if (age.value <= 18 || age.value >= 120) {
    //         event.preventDefault();
    //         agewarn.style.display = "block";
    //         agewarn.innerHTML = "Age must be between 18 and 120";
    //     } else {
    //         agewarn.style.display = "none";
    //         obj.age = age.value;
    //     }
    // }

    // -------------------------------------------Contact-----------------------

    if (!contact.value) {
        event.preventDefault();
        contactwarn.style.display = "block";
        contactwarn.innerHTML = "Please enter your contact number";
    } else {
        if (contact.value.length !== 10) {
            event.preventDefault();
            contactwarn.style.display = "block";
            contactwarn.innerHTML = "Contact number must be 10 digits";
        } else {
            contactwarn.style.display = "none";
            obj.contact = contact.value;
        }
    }

    // -------------------------------------------Email-----------------------

    if (!email.value) {
        event.preventDefault();
        emailwarn.style.display = "block";
        emailwarn.innerHTML = "Please enter your Email";
    } else {
        if (email.value.match(mailpattern)) {
            emailwarn.style.display = "none";
            obj.email = email.value;
        } else {
            event.preventDefault();
            emailwarn.style.display = "block";
            emailwarn.innerHTML = "Invalid Email";
        };
    }

    // -------------------------------------------Password-----------------------

    if (!password.value) {
        event.preventDefault();
        passwordwarn.style.display = "block";
        passwordwarn.innerHTML = "Please Enter your Password";
    } else {
        if (password.value.match(patternpass)) {
            passwordwarn.style.display = "none";
            obj.password = password.value;
        } else {
            event.preventDefault();
            passwordwarn.style.display = "block";
            passwordwarn.innerHTML = "Password must contain Capital letters, small letters and numbers";
        }
    }

    if (!check1.checked && !check2.checked && !check3.checked && !check4.checked) {
        event.preventDefault();
        languagewarn.style.display = "block";
        languagewarn.innerHTML = "Please select the language";
    } else {
        let checkarray = [];
        arrlanguage.filter((x) => {
            if (x.checked) {
                checkarray.push(x.value);
                return;
            };
        })
        if (checkarray.length == 0) {
            event.preventDefault();
            languagewarn.style.display = "block";
            languagewarn.innerHTML = "Please select the language";
        }
        if (checkarray.length > 2) {
            event.preventDefault();
            languagewarn.style.display = "block";
            languagewarn.innerHTML = "Can't select more than 2 language";
        } else {
            languagewarn.style.display = "none";
            obj.language = checkarray;
        }
    }

    // -------------------------------------------Technology-----------------------

    if (!technology.value) {
        event.preventDefault();
        technologywarn.style.display = "block";
        technologywarn.innerHTML = "Please select the technology";
    } else {
        technologywarn.style.display = "none";
        obj.technology = technology.value;
    }

    if (!name.value || !username.value || !contact.value || !email.value || !password.value || !technology.value || (!check1.checked && !check2.checked && !check3.checked && !check4.checked) || !bdate.value) {
        event.preventDefault();
    }
    else {
        obj.gender = gender.value;
        obj.date = new Date(bdate.value);
        let getData = localStorage.getItem("formData") ? JSON.parse(localStorage.getItem("formData")) : [];
        if (getData.length === 0) {
            let formDataId = 0;
            obj.id = formDataId;
            getData.push(obj);
            localStorage.setItem("formData", JSON.stringify(getData));
            localStorage.setItem("formDataId", formDataId);
        } else {
            let existEmail = getData.find((x) => {
                return x.email === email.value;
            })

            if (existEmail) {
                event.preventDefault();
                emailwarn.style.display = "block";
                emailwarn.innerHTML = "Email already exists";
            } else {
                let formDataId = JSON.parse(localStorage.getItem("formDataId"));
                formDataId++;
                obj.id = formDataId;
                getData.push(obj);
                localStorage.setItem("formData", JSON.stringify(getData));
                localStorage.setItem("formDataId", formDataId);
            }
        }
    }
    console.log(obj);
}

let indicateArr = [];
let pageVal = [];
let val;
function getPages() {
    document.getElementById('pages').innerHTML = "";
    let getData = JSON.parse(localStorage.getItem("formData"));
    let pages = Math.ceil(getData.length / 5);
    for (let i = 1; i <= pages; i++) {
        document.getElementById('pages').innerHTML += `<a id='${"page" + i}' class="navigate" onclick="seePage(${i})">${i}</a>`;
        indicateArr.push(`${"page" + i}`);
        pageVal.push(i);
    }
}
getPages();
console.log(indicateArr);
function seePage(page) {
    val = page;
    indicateArr.find((x) => {
        if (x === "page" + page) {
            document.getElementById("page" + page).style.color = "red";
        };
        if (x !== "page" + page) {
            document.getElementById(x).style.color = "white";
        };
    })
    let getData = JSON.parse(localStorage.getItem("formData"));
    let text = "";
    let seeData = (page * 5) - 5;
    let date;
    let scount = 1;
    for (let i = 0; i < scount; i++) {
        text += "<table>";
        text += "<th>" + "Unique ID" + "</th>";
        text += "<th>" + `<a id='"name"+${i}' onclick='sortName("name"+${i})'>` + "Name" + "</th>";
        text += "<th>" + `<a onclick='sortName("username"+${i})'>` + "Username" + "</th>";
        text += "<th>" + `<a onclick='sortName("birthdate"+${i})'>` + "BirthDate" + "</th>";
        // text += "<th>" + `<a onclick='sortName("age"+${i})'>` + "Age" + "</th>";
        text += "<th>" + `<a id='"email"+${i}' onclick='sortName("email"+${i})'>` + "Email" + "</th>";
        text += "<th>" + `<a onclick='sortName("contact"+${i})'>` + "Contact" + "</th>";
        text += "<th>" + `<a onclick='sortName("gender"+${i})'>` + "Gender" + "</th>";
        text += "<th>" + `<a onclick='sortName("language"+${i})'>` + "Language" + "</th>";
        text += "<th>" + `<a onclick='sortName("technology"+${i})'>` + "Technology" + "</th>";
        text += "<th>" + `<a onclick='sortName("name"+${i})'>` + "Action" + "</th>"
        text += "<th>" + `<a onclick='sortName("name"+${i})'>` + "Delete" + "</th>"
    }
    for (let i = seeData; i < (page * 5); i++) {
        if (i < getData.length) {
            date = new Date(getData[i].date).getDate() + "/" + (new Date(getData[i].date).getMonth() + 1) + "/" + new Date(getData[i].date).getFullYear();
            text += "<tr>"
            text += "<td>" + getData[i].id + "</td>";
            text += "<td>" + getData[i].name + "</td>";
            text += "<td>" + getData[i].username + "</td>";
            text += "<td>" + date + "</td>";
            // text += "<td>" + getData[i].age + "</td>";
            text += "<td>" + getData[i].email + "</td>";
            text += "<td>" + getData[i].contact + "</td>";
            text += "<td>" + getData[i].gender + "</td>";
            text += "<td>" + getData[i].language + "</td>";
            text += "<td>" + getData[i].technology + "</td>";
            text += "<td>" + `<button class="editData btn" id="${getData[i].id}" onclick="editData('${getData[i].id}')">Edit</button></td>`;
            text += "<td>" + `<button class="delete" id="${getData[i].id}" onclick="deleteData('${getData[i].id}')">Delete</button></td>`;
            text += "</tr>";
        } else {
            console.log("Empty data", i)
        }
    }
    document.getElementById('paginationData').innerHTML = text;
}
seePage(1);

let d = 0;
function editData(existId) {
    const data = JSON.parse(localStorage.getItem("formData"));
    data.forEach((item) => {
        if (parseInt(item.id) === parseInt(existId)) {
            name.value = item.name;
            username.value = item.username;
            // age.value = item.age;
            let date = new Date(item.date).toISOString().slice(0, 10);
            contact.value = item.contact;
            email.value = item.email;
            password.value = item.password;
            gender.value = item.gender;
            technology.value = item.technology;
            bdate.value = date;
            let mailval = item.email;

            arrlanguage.forEach((lang) => {
                lang.checked = false;
                if (item.language.includes(lang.value)) {
                    lang.checked = true;
                }
            })

            savebtn.onclick = (event) => {
                item.name = name.value;
                item.username = username.value;
                // item.age = age.value;
                item.contact = contact.value;
                item.password = password.value;
                item.gender = gender.value;
                item.technology = technology.value;
                item.date = bdate.value;
                let checkarray = [];
                arrlanguage.filter((x) => {
                    if (x.checked) {
                        checkarray.push(x.value);
                        return;
                    };
                })
                if (checkarray.length > 2) {
                    event.preventDefault();
                    languagewarn.style.display = "block";
                    languagewarn.innerHTML = "Can't select more than 2 language";
                }
                else {
                    languagewarn.style.display = "none";
                    item.language = checkarray;
                }

                let filteredData = data.find((existData) => {
                    if (existData.email === email.value) {
                        return true;
                    };
                })

                if (email.value === mailval) {
                    console.log("Email not changed");
                } else {
                    if (filteredData) {
                        event.preventDefault();
                        emailwarn.style.display = "block";
                        emailwarn.innerHTML = "Email already Exists";
                    } else {
                        emailwarn.style.display = "none";
                        item.email = email.value;
                    }
                }
                console.log("---------------->. filteredData", filteredData);
                localStorage.setItem("formData", JSON.stringify(data));
            }
        }
    })
}

function deleteData(existId) {
    let data = JSON.parse(localStorage.getItem("formData"));
    let x = data.findIndex((item) => {
        if (parseInt(item.id) === parseInt(existId)) {
            return data.indexOf(item);
        }
    })
    if (x === -1) {
        x = 0;
    }
    data.splice(x, 1);
    console.log(data.length);
    localStorage.setItem("formData", JSON.stringify(data));
    console.log("data", data);
    seePage(1);
};

let indicateFilter = [];
filterBtn.onclick = () => {
    let fselectmenu = document.getElementById('fselect');
    let fgender = document.forms['fform']['fgender'];
    let fcheck1 = document.getElementById('fcheck1');
    let fcheck2 = document.getElementById('fcheck2');
    let fcheck3 = document.getElementById('fcheck3');
    let fcheck4 = document.getElementById('fcheck4');
    let flanguage = [fcheck1, fcheck2, fcheck3, fcheck4];
    let flang = [];
    flanguage.forEach((x) => {
        if (x.checked) {
            flang.push(x.value);
        }
    })
    document.getElementById('pages').innerHTML = "";
    removeFilterbtn.style.display = "block";
    filterBtn.style.display = "none";
    let data = JSON.parse(localStorage.getItem("formData"));
    let getFilteredData;
    if ((fselectmenu.value == "") && !fgender.value && !flang.length) {
        getFilteredData = data.filter((item) => {
            if ((item.date >= fdate1.value) && (item.date <= fdate2.value)) {
                return item;
            }
        })
    } else {
        getFilteredData = data.filter((item) => {
            if (fselectmenu.value && !fgender.value && !flang.length) {
                return item.technology === fselectmenu.value;

            } else if ((fselectmenu.value == "") && fgender.value && !flang.length) {
                return item.gender === fgender.value;

            } else if ((fselectmenu.value == "") && !fgender.value && flang.length) {
                return flang.some((x) => item.language.includes(x));

            } else if (fselectmenu.value && fgender.value && !flang.length) {
                return (item.technology === fselectmenu.value) && (item.gender === fgender.value);

            } else if (fselectmenu.value && !fgender.value && flang.length) {
                return (item.technology === fselectmenu.value) && (flang.some((x) => item.language.includes(x)));

            } else if (!fselectmenu.value && fgender.value && flang.length) {
                return (item.gender === fgender.value) && (flang.some((x) => item.language.includes(x)));
            }
        })
    }
    let fpage = Math.ceil(getFilteredData.length / 5);
    for (let i = 1; i <= fpage; i++) {
        document.getElementById('pages').innerHTML += `<a id='${"page" + i}' class="navigate" onclick="seeFilteredData('${i}')">${i}</a>`;
        indicateFilter.push(`${"page" + i}`);
    }
    seeFilteredData(1);
}
removeFilterbtn.onclick = () => {
    let fselectmenu = document.getElementById('fselect');
    let fgender = document.forms['fform']['fgender'];
    let fcheck1 = document.getElementById('fcheck1');
    let fcheck2 = document.getElementById('fcheck2');
    let fcheck3 = document.getElementById('fcheck3');
    let fcheck4 = document.getElementById('fcheck4');
    let flanguage = [fcheck1, fcheck2, fcheck3, fcheck4];
    let flang = [];
    flanguage.forEach((x) => {
        if (x.checked) {
            flang.push(x.value);
        }
    })
    fselectmenu.value = "";
    document.getElementById('fmale').checked = false;
    document.getElementById('ffemale').checked = false;
    fcheck1.checked = false;
    fcheck2.checked = false;
    fcheck3.checked = false;
    fcheck4.checked = false;
    fdate1.value = "";
    fdate2.value = "";
    document.getElementById('pages').innerHTML = "";
    document.getElementById('paginationData').classList.remove("warnmsg");
    document.getElementById('paginationData').style.display = "block";
    removeFilterbtn.style.display = "none";
    filterBtn.style.display = "block";
    document.getElementById('demo').style.display = "block";
    filteredData.style.display = "none";
    getPages()
    seePage(1);
}

function seeFilteredData(fpage) {

    indicateFilter.find((y) => {
        if (y === fpage) {
            document.getElementById(fpage).style.color = "red";
        }
        if (y !== fpage) {
            document.getElementById(y).style.color = "white";
        }
    })

    let getFilteredData;
    let data = JSON.parse(localStorage.getItem("formData"));
    let fselectmenu = document.getElementById('fselect');
    let fgender = document.forms['fform']['fgender'];
    let fcheck1 = document.getElementById('fcheck1');
    let fcheck2 = document.getElementById('fcheck2');
    let fcheck3 = document.getElementById('fcheck3');
    let fcheck4 = document.getElementById('fcheck4');
    let flanguage = [fcheck1, fcheck2, fcheck3, fcheck4];
    let flang = [];
    flanguage.forEach((x) => {
        if (x.checked) {
            flang.push(x.value);
        }
    })

    if ((fselectmenu.value == "") && !fgender.value && !flang.length) {
        getFilteredData = data.filter((item) => {
            if ((item.date >= fdate1.value) && (item.date <= fdate2.value)) {
                return item;
            }
        })
    } else {
        getFilteredData = data.filter((item) => {

            if (fselectmenu.value && !fgender.value && !flang.length) {
                return item.technology === fselectmenu.value;

            } else if ((fselectmenu.value == "") && fgender.value && !flang.length) {
                return item.gender === fgender.value;

            } else if ((fselectmenu.value == "") && !fgender.value && flang.length) {
                return flang.some((x) => item.language.includes(x));

            } else if (fselectmenu.value && fgender.value && !flang.length) {
                return (item.technology === fselectmenu.value) && (item.gender === fgender.value);

            } else if (fselectmenu.value && !fgender.value && flang.length) {
                return (item.technology === fselectmenu.value) && (flang.some((x) => item.language.includes(x)));

            } else if (!fselectmenu.value && fgender.value && flang.length) {
                return (item.gender === fgender.value) && (flang.some((x) => item.language.includes(x)));

            } else if (fselectmenu.value && fgender.value && flang.length) {
                return (item.gender === fgender.value) && (flang.some((x) => item.language.includes(x))) && (item.technology === fselectmenu.value);
            };
        })
    }
    console.log("getFilteredData.length", getFilteredData.length);
    console.log("--->. getFilteredData", getFilteredData);

    if (getFilteredData.length) {
        document.getElementById('paginationData').classList.remove("warnmsg");
        let text = "";
        let seeData = (fpage * 5) - 5;
        let date;
        text += "<table>";
        text += "<th>" + "Unique ID" + "</th>";
        text += "<th>" + "Name" + "</th>";
        text += "<th>" + "Username" + "</th>";
        text += "<th>" + "BirthDate" + "</th>";
        // text += "<th>" + "Age" + "</th>";
        text += "<th>" + "Email" + "</th>";
        text += "<th>" + "Contact" + "</th>";
        text += "<th>" + "<a onclick='sortData()'>" + "Gender" + "</a>" + "</th>";
        text += "<th>" + "Language" + "</th>";
        text += "<th>" + "Technology" + "</th>";
        text += "<th>" + "Action" + "</th>"
        text += "<th>" + "Delete" + "</th>"
        for (let i = seeData; i < (fpage * 5); i++) {
            if (i < getFilteredData.length) {
                date = new Date(getFilteredData[i].date).getDate() + "/" + (new Date(getFilteredData[i].date).getMonth() + 1) + "/" + new Date(getFilteredData[i].date).getFullYear();
                text += "<tr>"
                text += "<td>" + getFilteredData[i].id + "</td>";
                text += "<td>" + getFilteredData[i].name + "</td>";
                text += "<td>" + getFilteredData[i].username + "</td>";
                text += "<td>" + date + "</td>";
                // text += "<td>" + getFilteredData[i].age + "</td>";
                text += "<td>" + getFilteredData[i].email + "</td>";
                text += "<td>" + getFilteredData[i].contact + "</td>";
                text += "<td>" + getFilteredData[i].gender + "</td>";
                text += "<td>" + getFilteredData[i].language + "</td>";
                text += "<td>" + getFilteredData[i].technology + "</td>";
                text += "<td>" + `<button class="editData btn" id="${getFilteredData[i].id}" onclick="editData('${getFilteredData[i].id}')">Edit</button></td>`;
                text += "<td>" + `<button class="delete" id="${getFilteredData[i].id}" onclick="deleteData('${getFilteredData[i].id}')">Delete</button></td>`;
                text += "</tr>";
            } else {
                console.log("Empty data", i)
            }
        }
        document.getElementById('paginationData').innerHTML = text;
    } else {
        document.getElementById('paginationData').innerHTML = "No record Found!";
        document.getElementById('paginationData').classList.add("warnmsg");
    }
}

let sortedData = [];
let b = 0;
function sortName(attribute) {
    document.getElementById('pages').innerHTML = "";
    document.getElementById('paginationData').innerHTML = "";
    let Data = JSON.parse(localStorage.getItem("formData"));
    let getData = [];
    let checkmail = [];



    if (attribute === "email0") {
        let saEmail = [];
        Data.forEach((x) => { saEmail.push(x.email) });
        saEmail.sort();
        console.log(saEmail);
        for (let i = 0; i < saEmail.length; i++) {
            Data.forEach((item) => {
                if (item.email === saEmail[i]) {
                    getData.push(item);
                    checkmail.push(item.email)
                }
            })
        }
    }else{
        // alert("Na chale");
        window.location.href = "form.html";
    }


    function getSortedPages() {
        pageVal = [];
        document.getElementById('pages').innerHTML = "";
        let pages = Math.ceil(getData.length / 5);
        console.log("total pages", pages);
        for (let i = 1; i <= pages; i++) {
            document.getElementById('pages').innerHTML += `<a id='${"page" + i}' class="navigate" onclick="seeSortedPage(${i})">${i}</a>`;
            indicateArr.push(`${"page" + i}`);
            pageVal.push(i);
        }
    }

    if(b % 2 === 0){
        getData = getData;
        b++;
    }else{
        getData = getData.toReversed();
        b++;
    };

    getSortedPages();
    sortedData = getData;
    let a = 0;
    if (a === 0) {
        seeSortedPage(1);
        a++;
    }
}

function seeSortedPage(page) {
    let getData = sortedData;
    val = page;
    indicateArr.find((x) => {
        if (x === "page" + page) {
            document.getElementById("page" + page).style.color = "red";
        };
        if (x !== "page" + page) {
            document.getElementById(x).style.color = "white";
        };
    })

    let text = "";
    let seeData = (page * 5) - 5;
    let date;
    let scount = 1;
    for (let i = 0; i < scount; i++) {
        text += "<table>";
        text += "<th>" + "Unique ID" + "</th>";
        text += "<th>" + `<a id='"name"+${i}' onclick='sortName("name"+${i})'>` + "Name" + "</th>";
        text += "<th>" + `<a onclick='sortName("username"+${i})'>` + "Username" + "</th>";
        text += "<th>" + `<a onclick='sortName("birthdate"+${i})'>` + "BirthDate" + "</th>";
        // text += "<th>" + `<a onclick='sortName("age"+${i})'>` + "Age" + "</th>";
        text += "<th>" + `<a id='"email"+${i}' onclick='sortName("email"+${i})'>` + "Email" + "</th>";
        text += "<th>" + `<a onclick='sortName("contact"+${i})'>` + "Contact" + "</th>";
        text += "<th>" + `<a onclick='sortName("gender"+${i})'>` + "Gender" + "</th>";
        text += "<th>" + `<a onclick='sortName("language"+${i})'>` + "Language" + "</th>";
        text += "<th>" + `<a onclick='sortName("technology"+${i})'>` + "Technology" + "</th>";
        text += "<th>" + `<a onclick='sortName("name"+${i})'>` + "Action" + "</th>"
        text += "<th>" + `<a onclick='sortName("name"+${i})'>` + "Delete" + "</th>"
    }
    for (let i = seeData; i < (page * 5); i++) {
        if (i < getData.length) {
            date = new Date(getData[i].date).getDate() + "/" + (new Date(getData[i].date).getMonth() + 1) + "/" + new Date(getData[i].date).getFullYear();
            text += "<tr>"
            text += "<td>" + getData[i].id + "</td>";
            text += "<td>" + getData[i].name + "</td>";
            text += "<td>" + getData[i].username + "</td>";
            text += "<td>" + date + "</td>";
            // text += "<td>" + getData[i].age + "</td>";
            text += "<td>" + getData[i].email + "</td>";
            text += "<td>" + getData[i].contact + "</td>";
            text += "<td>" + getData[i].gender + "</td>";
            text += "<td>" + getData[i].language + "</td>";
            text += "<td>" + getData[i].technology + "</td>";
            text += "<td>" + `<button class="editData btn" id="${getData[i].id}" onclick="editData('${getData[i].id}')">Edit</button></td>`;
            text += "<td>" + `<button class="delete" id="${getData[i].id}" onclick="deleteData('${getData[i].id}')">Delete</button></td>`;
            text += "</tr>";
        } else {
            console.log("Empty data", i)
        }
    }
    document.getElementById('paginationData').innerHTML = text;

    if (val !== 1) {
        pageVal.any((x) => {
            if (x === val) {
                seeSortedPage(val);
            }
        })
    }
}



// 135deg, #8052ec, #d161ff








// const btnclr = document.getElementById('btnclr');

// btnclr.onmouseover = () => {
//     // document.getElementById('body').style.background = "linear-gradient(330deg,  red, orange, yellow, green, blue, indigo, violet)";
//     document.getElementById('body').style.background = "linear-gradient(135deg, #8052ec, #d161ff)";
// }
// btnclr.onmouseout = () => {
//     document.getElementById('body').style.background = "rgb(39, 88, 76)";
// }

window.onload = () => {
    document.getElementById('animateh2').classList.add("animate");
}