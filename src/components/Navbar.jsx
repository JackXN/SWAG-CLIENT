import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 15px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: black;
  color: white;
  border: none;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border:  solid lightgray 2px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  background: none;
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;


const Navbar = () => {
  const quantity = useSelector(state=>state.cart.quantity)
  const user = useSelector(state => state.user)
  // const user = null
  console.log(user)
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          {/* <SearchContainer>
            <Input placeholder="Search"/>
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer> */}
        </Left>
        <Center>
         <Logo><Link to='/' style={{color:'white', textDecoration: 'none'}}>SWAG.</Link></Logo>
        </Center>
{user ? <Right>
  <Link to="/cart">
          <MenuItem>
            <Badge badgeContent={quantity} color="secondary">
              <ShoppingCartOutlined style={{color: 'white'}} />
            </Badge>
          </MenuItem>
          </Link>
</Right> :
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>
          <Link to='/login' style={{color: 'white', textDecoration: 'none'}}>SIGN IN</Link>
          </MenuItem>
          <Link to="/cart">
          <MenuItem>
            <Badge badgeContent={quantity} color='primary'>
              <ShoppingCartOutlined style={{color: 'white'}} />
            </Badge>
          </MenuItem>
          </Link>
        </Right>
      }
      </Wrapper>
    </Container>
  );
};

export default Navbar;
