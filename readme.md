# 리액트를 다루는 기술

# 1. props , state

## props

부모 컴포넌트가 자식 컴포넌트에게 주는 값

자식 컴포넌트는 받기만 할 수 있고, 받아온 props는 수정하지 못함
(단, 부모 컴포넌트가 props를 안 줄 경우를 대비해 defaultProps는 설정할 수 있다)

## state

컴포넌트 내부에서 선언하며 내부에서 값을 변경할 수 있으며

만약 값을 변경하게 될때는 클래스형컴포넌트는 setState(), 함수형컴포넌트는 useState를 통해 변경

# 2. 클래스형 컴포넌트, 함수형 컴포넌트

클래스형 컴포넌트는 constructor()메소드와 render()메소드로 구성되며, render()함수는 꼭 작성해야 하며

render()함수 안 return문에 JSX를 반환함

함수형 컴포넌트는 state와 LifeCycle API가 빠져있어(Hooks로 보완됨)

클래스형 컴포넌트에 비해 메모리 자원을 덜 사용하고 미세하게 빠름
