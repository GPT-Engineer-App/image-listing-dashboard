# Welcome to your GPT Engineer project

## Project info

**Project**: image-listing-dashboard 

**URL**: https://run.gptengineer.app/projects/REPLACE_WITH_PROJECT_ID/improve

**Description**: I want to make a dashboard where I want to parse a file of JSON array of objects and show the image and other fields as a list item. Image is `media_id`.jpg or .jpeg from images directory

JSON file

```
[
    {
        "media_id": "dce6803c-abf7-4d98-a8ca-8dde68bdc2fc",
        "description": "Photograph: Close-up of a man and woman, presumably in a romantic embrace, with the man's face partially visible as he leans in to kiss the woman's forehead. The woman's face is more prominently shown, with her eyes closed and a serene expression. She is wearing a silver headpiece, and her makeup is subtle with a focus on her eyes and lips. The background is blurred, emphasizing the subjects, and the lighting is soft, creating a warm and intimate atmosphere.",
        "content":
        {
            "rank-score": 0.1
        }
    },
    {
        "media_id": "a0a46341-9521-499c-8ed4-d0552f707f92",
        "description": "Two individuals, one male and one female, are captured in a tender moment, with their foreheads touching and eyes closed, suggesting intimacy and affection. The setting appears to be outdoors, with a brick wall in the background, adding a rustic ambiance to the scene.",
        "content":
        {
            "rank-score": 0.2
        }
    }
]
``` 

## Who is the owner of this repository?
By default, GPT Engineer projects are created with public GitHub repositories.

However, you can easily transfer the repository to your own GitHub account by navigating to your [GPT Engineer project](https://run.gptengineer.app/projects/REPLACE_WITH_PROJECT_ID/improve) and selecting Settings -> GitHub. 

## How can I edit this code?
There are several ways of editing your application.

**Use GPT Engineer**

Simply visit the GPT Engineer project at [GPT Engineer](https://run.gptengineer.app/projects/REPLACE_WITH_PROJECT_ID/improve) and start prompting.

Changes made via gptengineer.app will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in the GPT Engineer UI.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps: 

```sh
git clone https://github.com/GPT-Engineer-App/image-listing-dashboard.git
cd image-listing-dashboard
npm i

# This will run a dev server with auto reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with .

- Vite
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

All GPT Engineer projects can be deployed directly via the GPT Engineer app. 

Simply visit your project at [GPT Engineer](https://run.gptengineer.app/projects/REPLACE_WITH_PROJECT_ID/improve) and click on Share -> Publish.

## I want to use a custom domain - is that possible?

We don't support custom domains (yet). If you want to deploy your project under your own domain, then we recommend GitHub Pages.

To use GitHub Pages you will need to follow these steps: 
- Deploy your project using GitHub Pages - instructions [here](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site#creating-your-site)
- Configure a custom domain for your GitHub Pages site - instructions [here](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)