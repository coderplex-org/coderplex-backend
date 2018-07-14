const express = require('express');
const app = express();

const profiles = [
  {
    username: 'testuser',
    pic: 'google.com/image',
    bio: 'Lorem Ipsum Generator provides a GTK+ graphical user interface, a command-line interface, and a Python module that generate random "lorem ipsum" text (a popular kind of dummy text) (BSD Original, Libraries, Utilities, Testing, Web).',
    isLookingForWork: false,
    socialMediaHandles: {
      facebook: '/testuser',
      discord: 'testuser',
      github: 'testuser',
      linkedin: 'testuser',
      twitter: 'testuser',
    },
    skills: [
      "html",
      "css",
      "javascript"
    ],
    interested: [
      "nodejs",
      "react",
    ],
    projects: [
      {
        name: 'project',
        description: 'echo echo 11',
        tech: ["html", "css", "javascript"],
        link: "now.sh",
        src: 'github.com/now'
      },
      {
        name: 'project',
        description: 'echo echo 11',
        tech: ["html", "css", "javascript"],
        link: "now.sh",
        src: 'github.com/now'
      },
      {
        name: 'project',
        description: 'echo echo 11',
        tech: ["html", "css", "javascript"],
        link: "now.sh",
        src: 'github.com/now'
      }
    ]
  }
];

app.get('/:user', (req, res) => {
  console.log(req.params.user);
})

app.get('/', (req, res) => {
  res.send('Backend in progress');
});
app.listen(process.env.PORT || 5000, function () {
  console.log(`Listening on ${process.env.PORT}`);
});