# RESTful Cryptids (Homework)

What is a Cryptid you ask? Cryptids are legendary creatures such as Sasquatch (Bigfoot) or Nessie (Loch Ness Monster) that people claim to have seen or encountered, but no evidence has been gathered to prove it.

---
## Prerequisite Lessons

* Layouts and Controllers Lab: https://github.com/GAWDISeattle/notes/blob/master/05-node-express/express-apis/01organization.md
* CRUD/RESTful Routing in Express Lesson: https://gawdiseattle.gitbooks.io/wdi/05-node-express/express-REST-crud/00readme.html
* GET & POST lesson/code-along: https://gawdiseattle.gitbooks.io/wdi/05-node-express/express-REST-crud/01get-post.html

--- 
## Goal

For this assignment, you're going to build on the dinosaurs app that we built in class during the CRUD/RESTful Routing lesson.

Using the same app (just add to your existing code), create a mirror of what you created in the dinosaurs app, only this time, instead of dinosaurs, add and document cryptids! Big-foot is a fan favorite, but there are more to find by looking for cryptids online. Definitely find a strange or exotic cryptid to tell us about!

---

### 1. Add the `cryptids.json` file to your `crud_dinosaurs` directory. (That file is included in this repo.)

Just copy it over to your existing dino code. You should already have the code you need to read and write to JSON files from the dinosaurs app.

### 2. Create the following routes:

| VERB | URL | Action (CRUD) | Description |
|------|-----|---------------|-------------|
| GET | /cryptids | Index (Read) | displays all cryptids |
| GET | /cryptids/:id | Show (Read) | displays the type and photo of a particular cryptid (:id would be replaced by an actual number 1) |
| POST | /cryptids | Create | creates an cryptid with the POST payload data |
| GET | /cryptids/new | Show(Read) | form for making a new cryptid |
| GET | /cryptids/edit/:id | Show(Read) | form for editing a specific cryptid |

**Hint:** You will need to have two folders inside your `views` directory, one for `dinosaurs` and one for `cryptids`. Make sure to change your `res.render()` statements accordingly! 

> Refer to the `faves_hates_app` from the [Layouts and Controllers Lab](https://github.com/GAWDISeattle/notes/blob/master/05-node-express/express-apis/01organization.md) for a reference.

### 3. Reorganize your routes into controllers

There should be one controller for dinosaurs and one controller for cryptids.

## BONUS!

Make a tooltip that displays the name of the cryptid when you hover over the image.
