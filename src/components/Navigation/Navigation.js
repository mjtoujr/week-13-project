import './Navigation.css'; {/*Link to the styling*/}

export default function Navigation() {
  return (
    <div className='navbar'>{/*We place all links as an unordered list, within the same div*/}
        <ul>
            <li><a href='#'>Home</a></li>
            <li><a href='#'>About Us</a></li>
            <li><a href='#'>Contact Us</a></li>
            <li><a href='#'>Archives</a></li>
            <li><a href='#'>This Week's Menu</a></li>
            <li><a href='#'>Resources</a></li>
        </ul>
    </div>
  )
}
