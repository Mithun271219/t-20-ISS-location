let header=document.createElement('header')
let h1=document.createElement('h1')
h1.innerHTML='IIS current location and Astronauts in space'
header.append(h1)
document.body.append(header)

let main=document.createElement('main')
document.body.append(main)

let section=document.createElement('section')
section.innerHTML='<b>The International Space Station is moving at close to 28,000 km/h so its location changes really fast! Where is it right now?</b>'
let div34=document.createElement('div')
section.append(div34)

async function getIISLocation(){
    clearsec()
    let url='http://api.open-notify.org/iss-now.json'
    let pdata=await fetch(url)
    let idata=await pdata.json();
    let latitude=idata.iss_position.latitude
    let longitude=idata.iss_position.longitude
    div34.innerHTML=(`Longitude: ${longitude} Latitude: ${latitude}`)
    //console.log({longitude,latitude}) 
}
getIISLocation()
setInterval(getIISLocation,5000)

function clearsec(){
    let res=div34.innerHTML=''
    res.innerHTML='    '
    return res
}

let section2=document.createElement('section')
let div77=document.createElement('div')
div77.classList="divi"
div77.innerHTML='<b>Current Astronauts in space</b>'
section2.append(div77)
let table=document.createElement('table')
table.classList='table'
let thead=document.createElement('thead')
thead.classList='thead-dark'
let trh=document.createElement('tr')
let td1=td()
td1.setAttribute('scope','col')
td1.innerHTML='Sl.no'
let td2=td()
td2.setAttribute('scope','col')
td2.innerHTML='Name'
let td3=td()
td3.setAttribute('scope','col')
td3.innerHTML='Craft'
let tbody=document.createElement('tbody')
trh.append(td1,td2,td3)
thead.append(trh)
table.append(thead,tbody)
section2.append(table)

main.append(section,section2)

async function pullAstroData(){
    section2ClearData();
    let url=`http://api.open-notify.org/astros.json`
    let pdata=await fetch(url)
    let jdata=await pdata.json();
    for ( var i=0;i<jdata.people.length;i++){
        let tr2=document.createElement('tr')
        let td21=document.createElement('td')
        td21.setAttribute('scope','col')
        td21.innerHTML=i+1
        let td22=document.createElement('td')
        td22.innerHTML=jdata.people[i].name
        let td23=document.createElement('td')
        td23.innerHTML=jdata.people[i].craft
        tr2.append(td21,td22,td23)
        tbody.append(tr2)
    }
}
pullAstroData()

function section2ClearData(){
    let res=tbody.innerHTML=''
    return res;
}

function td(){
    let res=document.createElement('td')
    return res;
}