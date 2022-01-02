import { useState } from "react";
import styled from "styled-components";
import { login } from "../redux/apiCalls";
import { mobile } from "../responsive";
import { useDispatch, useSelector } from "react-redux";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://media.istockphoto.com/photos/asian-skateboarder-in-action-jump-in-the-air-picture-id1319645876?b=1&k=20&m=1319645876&s=170667a&w=0&h=O0vDRX43QT8N1A-9me_0Nh0_czOVZJfakL8-vrC-J5c=")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  &:disabled {
    color: green;
    cursor: not-allowed;
  }
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Error = styled.span`
  color: red;
`;

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={handleClick} disabled={isFetching}>
            LOGIN
          </Button>
          {error && <Error>Something went wrong...</Error>}
          <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login











// import { useState } from "react";
// import styled from "styled-components";
// import { login } from "../redux/apiCalls";
// import { mobile } from "../responsive";
// import { useDispatch, useSelector } from "react-redux";
// import { useHistory } from "react-router-dom";

// const Container = styled.div`
//   width: 100vw;
//   height: 100vh;
//   background: linear-gradient(
//       rgba(255, 255, 255, 0.5),
//       rgba(255, 255, 255, 0.5)
//     ),
//     url("https://www.toxicworldskatesurf.com/wp-content/uploads/2017/08/skateboard-longboard.jpg")
//       center;
//   background-size: cover;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

// const Wrapper = styled.div`
//   width: 25%;
//   padding: 20px;
//   background-color: white;
//   ${mobile({ width: "75%" })}
// `;

// const Title = styled.h1`
//   font-size: 24px;
//   font-weight: 300;
// `;

// const Form = styled.form`
//   display: flex;
//   flex-direction: column;
// `;

// const Input = styled.input`
//   flex: 1;
//   min-width: 40%;
//   margin: 10px 0;
//   padding: 10px;
// `;

// const Button = styled.button`
//   width: 40%;
//   border: none;
//   padding: 15px 20px;
//   background-color: teal;
//   color: white;
//   cursor: pointer;
//   margin-bottom: 10px;
//   &:disabled {
//     color: green;
//     cursor: not-allowed;
//   }
// `;

// const Link = styled.a`
//   margin: 5px 0px;
//   font-size: 12px;
//   text-decoration: underline;
//   cursor: pointer;
// `;

// const Error = styled.span`
//   color: red;
// `;

// const Login = () => {
//   let history = useHistory();
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [loggedIn, setLoggedIn] = useState(false);
//   const dispatch = useDispatch();
//   const { isFetching, error } = useSelector((state) => state.user);

//   const handleClick = (e) => {
//     e.preventDefault();
//     login(dispatch, { username, password });

// if(username && password) {
//   setLoggedIn(true)
//   history.push('/')
// }
// // console.log(loggedIn)

//   };
//   return (
//     <Container>
//       <Wrapper>
//         <Title>SIGN IN</Title>
//         <Form>
//           <Input
//             placeholder="username"
//             onChange={(e) => setUsername(e.target.value)}
//           />
//           <Input
//             placeholder="password"
//             type="password"
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <Button onClick={handleClick} disabled={isFetching}>
//             LOGIN
//           </Button>
//           <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
//           <Link>CREATE A NEW ACCOUNT</Link>
//         </Form>
//       </Wrapper>
//     </Container>
//   );
// };

// export default Login;
