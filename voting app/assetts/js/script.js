

const checkboxes = document.querySelectorAll('.single-checkbox');
checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            checkboxes.forEach(otherCheckbox => {
                if (otherCheckbox !== checkbox) {
                    otherCheckbox.checked = false; // Uncheck other checkboxes
                }
            });
        }
    });
});

let walletadress="";
const votelist =[
    {id:1,title:'proposal 1',description:'description for proposal 1'},
    {id:2,title:'proposal 2',description:'description for proposal 2'},
];
const votehistory = [];
document.getElementById('connectbutton').onclick= 
async ()=> {
    if(window.eutherum){
        const accounts = await
        window.eutherum.request({method:'eth_requestAccounts'});
        walletadress =accounts[0];
    }
    document.getElementById('walletadress').innerText 
    =walletadress.slice(0,6)+'...'+
    walletadress.slice(-4);

    document.getElementById('walletadress').style.display='inline';
    document.getElementById('connectbutton').style.display='none';
    leadDashboard();
   }else {
    alert('please install metamask!');
   }
   };
 function  leadDashboard(){
    document.getElementById('balance').innerText='100';
     document.getElementById('upcmingvotes').innerText='vote on proposal 1 in 3 days';
 }
 const VoteListElement =
 document.getElementById('votelist');
 VoteListElement.innerHTML="";
 votelist.forEach(vote=>{
    const votecard =document.createElement('div');
 });

   
      //  



//tell chat gpt to explain every line of this code
