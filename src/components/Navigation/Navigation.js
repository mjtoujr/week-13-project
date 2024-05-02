import './Navigation.css'; /*Link to the styling*/

export default function Navigation() {
  return (
    <div className='navbar'>{/*We place all links as an unordered list, within the same div*/}
        <ul>
            <li><a href='http://localhost:3000/'>Home</a></li>
            <li><a href='http://localhost:3000/'>About Us</a></li>
            <li><a href='http://localhost:3000/'>Contact Us</a></li>
            <li><a href='http://localhost:3000/'>Archives</a></li>
            <li><a href='http://localhost:3000/'>This Week's Menu</a></li>
            <li><a href='http://localhost:3000/'>Resources</a></li>
        </ul>
    </div>
  )
}
