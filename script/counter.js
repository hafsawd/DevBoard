  const completeBtns = document.querySelectorAll(".completeBtn");
  const assignedCount = document.getElementById("assignedCount");
  const completedCount = document.getElementById("completedCount");
  const history = document.getElementById("history");
  const clearBtn = document.getElementById("clearBtn");  
  const realTime = document.getElementById("dateTime");

//   real time adding
  function recentTime() {
    const now = new Date();
    realTime.textContent = now.toLocaleString();
  }
  setInterval(recentTime, 1000);
  recentTime();

 

   completeBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      alert("Board updated successfully");

      // Update counts
      let assignedNum = parseInt(assignedCount.textContent);
      let completedNum = parseInt(completedCount.textContent);
      if (assignedNum > 0) {
        assignedCount.textContent = assignedNum - 1;
        completedCount.textContent = completedNum + 1;
      }

      // Get task title
      const taskCard = btn.closest(".card");
      const title = taskCard.querySelector(".card-title").textContent;
      const today = new Date().toLocaleDateString();

      // Add to history
      const msg = document.createElement("p");
      msg.className = "p-2 bg-blue-100 rounded";
      msg.textContent = `You have complete the task ${title} on ${today}`;
      history.appendChild(msg);

      // button disable
      btn.disabled = true;

      btn.classList.add("btn-disabled");

      //final alert
      if (parseInt(assignedCount.textContent) === 0) {
        alert("Congrats!! You have completed all the current tasks");
      }
            });
         });

 
    clearBtn.addEventListener("click", () => {
    history.innerHTML = "";
    });

