const updateThread = async (event) => {
    event.preventDefault();
    console.log('updating thread')

    const path = document.location.pathname
    console.log(path)
    const splitPath = path.split('/')
    const threadQ = splitPath[splitPath.length - 1]
    const thread_idTrue = threadQ.split('?')
    const thread_id = thread_idTrue[0]
    console.log(thread_id)


    const title = document.querySelector('#title').value
    const text = document.querySelector('#text').value
    try{
      const response = await fetch(`/api/threads/${thread_id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
          title: title,
          text: text,
        })
      }); 

      window.location.replace(`https://tech-blog111.herokuapp.com/dashboard`)
      //window.location.replace(`http://localhost:3001/dashboard`)

    } catch(error) {
        console.log('you are not the owner of this thread!')
    }
};

document.getElementById('updatePush').addEventListener('click', updateThread);

const deleteThread = async (event) => {
  event.preventDefault();
  console.log('deleting')

  const path = document.location.pathname
  console.log(path)
  const splitPath = path.split('/')
  const threadQ = splitPath[splitPath.length - 1]
  const thread_idTrue = threadQ.split('?')
  const thread_id = thread_idTrue[0]
  console.log(thread_id)

  try{
      
    const response = await fetch(`/api/threads/${thread_id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    });

    window.location.replace(`https://tech-blog111.herokuapp.com/dashboard`)
    //window.location.replace(`http://localhost:3001/dashboard`)
  } catch(error) {
      console.log('you are not the owner of this thread!')
  }
};

const getThreadToUpdate = async (event) => {
  event.preventDefault();

  const path = document.location.pathname
  console.log(path)
  const splitPath = path.split('/')
  const threadQ = splitPath[splitPath.length - 1]
  const thread_idTrue = threadQ.split('?')
  const thread_id = thread_idTrue[0]
  console.log(thread_id)

  try{
      const response = await fetch(`/api/thread/${thread_id}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      });

      window.location.replace(`https://tech-blog111.herokuapp.com/api/thread/${thread_id}`)
      //window.location.replace(`http://localhost:3001/api/thread/${thread_id}`)

  } catch(error) {
      alert('this thread may no longer exist!')
  }
}



document.getElementById('delete').addEventListener('submit', deleteThread);
document.getElementById('update').addEventListener('submit', getThreadToUpdate);