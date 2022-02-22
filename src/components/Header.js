import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, onAdd, showAdd }) => {

    const onClick = () => {
        console.log('ADD')
    }

  return (
    <header className='header'>
        <h1>{title}</h1>
        <Button color={showAdd ? 'darkred': 'green'} text={showAdd ? 'CLOSE': 'Add'} onClick={onAdd} />
    </header>
  )
}

Header.defaultProps = {
    title: 'Task Tracker',
} 

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header