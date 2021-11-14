const makeThread = async (event) => {
    event.preventDefault();
    console.log('making thread')
    const title = document.querySelector('input.form-control').value
    const text = document.querySelector('textarea.form-control').value

    console.log(title, text)

    try{
      const response = await fetch('/api/threads', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
          title: title,
          text: text,
        })
      }); 
      const path = response.url.split('/')

      if(path[path.length - 1] === 'login'){
          window.location = response.url
      } else {
          window.location.reload()
      }
    } catch(error) {
        console.log('you must be logged in to post a thread')
    }
};

const getIndividualThread = async (event) => {
    event.preventDefault();
    console.log(event.target.id)
    window.location.replace(`https://tech-blog111.herokuapp.com/api/threads/${event.target.id}`)
    //window.location.replace(`http://localhost:3001/api/threads/${event.target.id}`)
    // try{
    //   const getThread = await fetch(`/api/threads/${event.target.id}`, {
    //   method: 'GET',
    //   headers: { 'Content-Type': 'application/json' },
    //   }); 
      
    //   if (getThread.ok) {
    //       window.location.replace(`http://localhost:3001/api/threads/${event.target.id}`)
    //   }
    // } catch(error) {
    //     console.log('this thread may no longer exist')
    // }
};

const card = document.querySelectorAll('.card')
for(let i = 0; i <card.length; i++) {
    card[i].addEventListener('click', getIndividualThread)
}
document.getElementById('makeThread').addEventListener('click', makeThread);