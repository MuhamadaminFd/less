import { useSelector, UseSelector } from "react-redux"


const Header = ({ isChangedColor }) => {
  const { changed } = useSelector((state) => state.counter)
  return (
    <div>
      <div style={{ color: isChangedColor ? 'red' : 'black' }}>Header</div>
      <div style={{ color: changed ? 'red' : 'black' }}>Header</div>
    </div>


  )
}

export default Header