Today, you will build the frontend for the Todo app. Follow the steps below:



Use the sample project as the backend: https://github.com/neuefische/java-todo-backend

Create a new Vite project in Intellij

Add the entry in vite.config.ts:


server: {
proxy: {
'/api': {
target: 'http://localhost:8080',
}
}
}

In your axios requests, use relative paths (e.g. "/api/todo" instead of "http://localhost:8080/api/todo")



Build the todo-frontend with React