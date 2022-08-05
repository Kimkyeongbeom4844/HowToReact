import PropTypes from "prop-types";

const MyComponent = ({ grade, name, children, job }) => {
  // const { grade, name, children, job } = props;
  return (
    <div>
      안녕하세요 제 이름은 {grade}학번 {name}입니다.
      <br /> 졸업은 아직 {children}. 직업은 {job}이에요
    </div>
  );
};

MyComponent.defaultProps = {
  name: "김경범",
  children: "안했어요",
  job: "학생",
  grade: 17,
};
MyComponent.propTypes = {
  name: PropTypes.string,
  children: PropTypes.string,
  job: PropTypes.any,
  grade: PropTypes.number,
};

export default MyComponent;
