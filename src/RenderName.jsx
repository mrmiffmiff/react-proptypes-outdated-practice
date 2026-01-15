import PropTypes from "prop-types";

const RenderName = (props) => {
    return <div>{props.name}</div>
};

RenderName.PropTypes = {
    name: PropTypes.string,
};

RenderName.defaultProps = {
    name: 'Test',
};

export default RenderName;