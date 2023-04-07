const deal = require('../helper/deal-json')
const task = './models/tasks.json'
class tasks {
    static alltasks = (req, res) => {
        const newtasks = deal.readFileJson(task)
        res.render('alltasks', { pageTitle: 'alltasks', newtasks })
    }

    static search = (req, res) => {
        const newtasks = deal.readFileJson(task)
        const title = req.query.title
        const search = newtasks.find(t => t.title.toLowerCase() === title.toLowerCase() || t.content.toLowerCase() == title.toLowerCase())
        console.log(search);
        res.render('search', { pageTitle: 'search', search })
    }

    static delete = (req, res) => {
        deal.writeJsonData(task, [])
        res.redirect('/')
    }

    static addtask = (req, res) => {
        res.render('addtask', { pageTitle: 'add' })
    }

    static newtask = (req, res) => {
        const data = deal.readFileJson(task)
        const newtask = { id: Date.now(), ...req.query, status: 'false' }
        data.push(newtask)
        deal.writeJsonData(task, data)
        res.redirect('/')
    }

    static del = (req, res) => {
        const data = deal.readFileJson(task)
        const id = req.params.id
        const newData = data.filter(tsk => tsk.id != id)
        deal.writeJsonData(task, newData)
        res.redirect('/')
    }

    static show = (req, res) => {
        const data = deal.readFileJson(task)
        const id = req.params.id
        const index = data.findIndex(t => t.id == id)
        const showtask = data[index]
        res.render('show', { showtask })
        console.log(index);
    }

    static status = (req, res) => {
        const arr = deal.readFileJson(task)
        const id = req.params.id
        const ind = arr.findIndex(t => t.id == id)
        arr[ind].status = 'true'
        deal.writeJsonData(task, arr)
        res.redirect('/')
    }

    static edit = (req, res) => {
        const id = req.params.id
        const editTasks = deal.readFileJson(task)
        const editTask = editTasks.find(t => t.id == id)
        res.render("edit", {
            pageTitle: "Edit",
            editTask
        })
    }

    static editTask = (req, res) => {
        const id = req.params.id
        const taske = deal.readFileJson(task)
        const index = taske.findIndex(t => t.id == id)
        taske[index] = { status: 'false', id, ...req.query }
        deal.writeJsonData(task, taske)
        console.log('*******');
        res.redirect('/')
    }
}

module.exports = tasks