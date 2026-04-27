# AI Policy

Hound is not vibe-coded. I started developing Hound years ago and even made a [reddit post](https://www.reddit.com/r/selfhosted/comments/12fov6v/hound_self_hosted_solution_for_tracking_tv_shows/) about it. Since then, a lot has changed in the software development landscape.

Here's my current development approach:

- I use AI to throw around ideas, and have a discussion on potential solutions to implement a new feature, or architectural decision
- I often disagree with AI's opinions. eg. Since I know the project best, there are times to make practical decisions over theoretically 'correct' ones
- Once I've decided on a plan, **I code everything myself.**

Actual coding is rarely the development bottleneck in Hound, when you plan well, the actual code changes should be short and surgical. I know the codebase better, and I've found that using AI to code doesn't speed up the process. With AI, the time spent debugging offsets any time saved.

## Contributing

Right now, I'm the only one working on Hound, so **contributors are very welcome!**

Feel free to report bugs on [Github](https://github.com/Hound-Media-Server/hound), or make a pull request.

### General Guidelines

- Don't vibe-code, you need to understand every line of code in a PR. I recommend following my approach in the AI section above.
- PRs should be as surgical as possible. Fix or add one thing at a time.
- If you'd like to add a new feature, especially a major one, please discuss this with me first, or open an issue.
- You're free to make third-party clients and tools for Hound, refer to the API Documentation in this site. We encourage these to be open-source as well!
- Feel free to contact me for any help, such as understanding the codebase, help setting up the dev environment, etc.
