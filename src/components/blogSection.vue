<template>
  <div class="blog-post">
    <!-- Blog Content -->
     <h3 class="page-name">Ron's Blog</h3>
    <h4>{{ title }}</h4>
    <img v-if="image" :src="image" alt="Blog Post Image" class="post-image" />
    <p>{{ content }}</p>

    <!-- Comment Section -->
    <div class="comments">
      <h6>Comments</h6>
      <ul v-if="comments.length">
        <li v-for="(comment, index) in comments" :key="index">
          <strong>{{ comment.name }}</strong>: {{ comment.message }}
          <small>({{ formatDate(comment.created_at) }})</small>
        </li>
      </ul>
      <p v-else>No comments yet. Be the first to comment!</p>

      <!-- Comment Form -->
      <form @submit.prevent="addComment">
        <input v-model="newComment.name" type="text" placeholder="Your Name" required />
        <!-- <textarea v-model="newComment.message" placeholder="Your Comment" required></textarea> -->
        <button type="submit">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      title: "",
      //content: "",
      //image: "",  
      comments: [],
      newComment: {
      name: "",
      message: "",
     },
    };
  },
  async created() {
    await this.fetchBlogPost()
  },
  methods: {
    async fetchBlogPost() {
      try {
        const response = await axios.get("http://localhost:8000/api/posts/2/")
        this.title = response.data.title;
        // this.content = response.data.content;
        // this.image = response.data.image ? `http://localhost:8000${response.data.image}` : ""
        this.comments = response.data.comments
      } catch (error) {
        console.error("Error fetching blog post:", error)
      }
    },
    async addComment() {
      if (this.newComment.name && this.newComment.message) {
        try {
          const payload = {
            ...this.newComment,
            post: 1, // Replace 1 with the post ID
          };
          const response = await axios.post("http://localhost:8000/api/comments/", payload);
          this.comments.push(response.data);
          this.newComment.name = "";
          this.newComment.message = "";
        } catch (error) {
          console.error("Error adding comment:", error);
        }
      }
    },
    formatDate(dateString) {
      const date = new Date(dateString);
      return date.toLocaleString();
    },
  },
};
</script>

<style scoped>
.blog-post {
  max-width: 80rem;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

.page-name{
  text-align: center;
}

h4 {
  
  margin-bottom: 20px;
}

.post-image {
  max-width: 100%;
  height: auto;
  margin-bottom: 20px;
  border-radius: 8px;
}

p {
  font-size: 1.2rem;
  line-height: 1.6;
}

.comments {
  margin-top: 40px;
}

h2 {
  font-size: 1.8rem;
  margin-bottom: 20px;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  background: #f9f9f9;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
}

form {
  display: flex;
  flex-direction: column;
}

input,
textarea {
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #4a4949;
  border-radius: 5px;
}

button {
  padding: 10px;
  background: #42b983;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background: #369f6e;
}
</style>