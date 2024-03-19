import PropTypes from 'prop-types';



const Link = ({ route }) => {
    return (
        <div>
            <li className='mr-10 px-6 hover:bg-yellow-600'><a href={route.path}>{route.name}</a></li>
        </div>
    );
};

Link.propTypes = {
    route: PropTypes.object.isRequired
};

export default Link;