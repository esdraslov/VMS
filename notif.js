let notifVSs = []

let notifVS = {
  push: (title, body, onclick) => {
    notifVSs.push({
      title: title,
      msg: body,
      click: onclick
    })
    return {
      close: () => {
        const index = notifVSs.indexOf({
          title: title,
          msg: body,
          click: onclick
        })
        if (index > -1) {
          notifVSs.splice(index, 1)
        } else {
          throw "the notification doens't exist in notification area"
        }
      },
      query: {
        title: title,
        msg: body,
        click: onclick
      }
    }
  },
  pullByItem: (title, body, onclick) => {
    const index = notifVSs.indexOf({
      title: title,
      msg: body,
      click: onclick
    })
    if (index > -1) {
      notifVSs.splice(index, 1)
    } else {
      throw "the notification doens't exist in notification area"
    }
  },
  pullByID: (id) => {
    notifVSs.splice(id, 1)
  }
}