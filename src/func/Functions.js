export const providerMail = (message) =>{
  fetch('http://localhost:5205/Email',{
            method:'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(message)
          })
}

export const PurchaseEmail=(message)=>{
  fetch('http://localhost:5205/Email',{
            method:'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(message)
          })
}

export const AddHistory=(Purchase)=>{
  fetch('http://localhost:5205/Purchase',{
            method:'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(Purchase)
          })
}

export function today(){
  let date = new Date();
  let day, month, year;
  day = date.getDate();
  month = date.getMonth() + 1;
  year = date.getFullYear();
  let complete = `${day}/${month}/${year}`;
  return complete;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export function estimateday(){
  let date = new Date();
  let day, month, year;
  day = date.getDate() + getRandomInt(6);
  month = date.getMonth() + 1;
  year = date.getFullYear();
  let complete = `${day}/${month}/${year}`;
  return complete;
}