import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <main>
      <h1>HOME PAGE</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, illum quod. Voluptatibus aliquam earum cupiditate corporis tempora adipisci suscipit, quae excepturi tempore incidunt culpa enim fugit dolore aliquid eius modi?</p>
      <Link to='/login'>
        <button>
          Go to login page
        </button>
      </Link>
    </main>
  )
}
