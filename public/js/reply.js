const makeReply = async (event) => {
    event.preventDefault();

    const reply = document.querySelector('textarea.reply').value
    const path = document.location.href.split('/')
    const threadQ = path[path.length - 1]
    const thread_idTrue = threadQ.split('?')
    const thread_id = thread_idTrue[0]
    console.log(reply)
    console.log(thread_id)
    try{
      const response = await fetch('/api/reply', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
          reply: reply,
          thread_id: thread_id
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

document.getElementById('makeReply').addEventListener('click', makeReply)