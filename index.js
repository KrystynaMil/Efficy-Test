const oppoStatus = [
    {
      "K_OPPO_STATUS": 1,
      "STATUS": "1. Initial Contact",
      "SUCCESS": 0
    },
    {
      "K_OPPO_STATUS": 2,
      "STATUS": "2. Demonstration",
      "SUCCESS": 25
    },
    {
      "K_OPPO_STATUS": 3,
      "STATUS": "3. Proposal",
      "SUCCESS": 50
    },
    {
      "K_OPPO_STATUS": 4,
      "STATUS": "4. Negotiation",
      "SUCCESS": 75
    },
    {
      "K_OPPO_STATUS": 5,
      "STATUS": "5. Order",
      "SUCCESS": 100
    }
  ];
  
  const Module = class {
    constructor() {
      
    }
    start() {

          const select = document.querySelector("select");
          const form = document.querySelector("form");
          const input = document.querySelector("input");
          const output = document.querySelector(".output");

// When status is changed, set the associated value of success 

          const handleChange = () => {
            const index = select.value;
            const status = oppoStatus.find(item => item.K_OPPO_STATUS === Number(index)).SUCCESS
            input.value = status;
          }
// On form submit, output the form element values as JSON string. We want to see the values, not the text.
          
          const outputValue = () => {
            output.innerHTML = JSON.stringify({
              "status":  select.value,
              "success": input.value
          });
          }
    // Load the <select> options with the contents of the global oppoStatus array.

      for (let i = 0; i < oppoStatus.length; i++) {
         const option = document.createElement("option");
         option.value = oppoStatus[i].K_OPPO_STATUS;
         option.innerHTML = oppoStatus[i].STATUS;
         select.appendChild(option); 
      }

      select.addEventListener("change", () => {
         handleChange();
      });
          
      form.addEventListener("submit", (e) => {
        e.preventDefault();
             outputValue();
   
      });
    
  }
};
  
  const module = new Module(oppoStatus);
  module.start();