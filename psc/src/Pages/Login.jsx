import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { useEffect, useState } from 'react';
  import { signIn } from '../Redux/auth/action';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate,useLocation } from 'react-router-dom';
  export default function SimpleCard() {
    const dispatch=useDispatch();
    const navigate=useNavigate()
    const location =useLocation();
    const authState=useSelector((store)=>store.authReducer.auth);
    const [userEmail, setUseremail] =useState('eve.holt@reqres.in');
    const [userPassword, setUserPassword]=useState('');
    const handleUserEmailChange=(e)=>{
          setUseremail(e.target.value)
    }
    const handleUserPasswordChange=(e)=>{
        setUserPassword(e.target.value)
  }
    const submitHandler=(e)=>{
        e.preventDefault();
        dispatch(signIn({email:userEmail,password:userPassword}))
        // if(location.state){
        //     navigate(location.state,{replace:true})
        // }
    }
     useEffect(()=>{
           if(location?.state?.pathname && authState){
            navigate(location?.state?.pathname,{replace:true})
        }
     },[location?.state,navigate,authState])
    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Sign in to your account</Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
                <form onSubmit={submitHandler}>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input type="email" value={userEmail} onChange={handleUserEmailChange} />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" value={userPassword} onChange={handleUserPasswordChange}/>
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Checkbox>Remember me</Checkbox>
                  <Link color={'blue.400'}>Forgot password?</Link>
                </Stack>
                <Button
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}
                  type="submit">
                  Sign in
                </Button>
              </Stack>
              </form>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }