const MyComponent = (props) => {
  const { children, name } = props; //비구조 할당
  return (
    <div>
      안녕하세요 제 이름은 {name}입니다. 자식은 아직 {children}.
    </div>
  );
};

MyComponent.defaultProps = {
  name: "김경범",
};

export default MyComponent;
