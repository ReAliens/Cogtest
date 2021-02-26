import { Box, Flex, Grid, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import StartTestButton from '../../../../../components/Button'
import { questions } from './data'
import ReactCountdownClockownClock from 'react-countdown-clock'
import { useHistory, useParams } from 'react-router-dom'
import useQuestions from '../../../../../hooks/useQuestions'

const StroopTest = () => {
  const [currQuestionIndex, setCurrQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState({})
  const [count, setCount] = useState(0)
  const [wrongAnswers, setWrongAnswers] = useState(0)
  const history = useHistory()
  const params = useParams()
  // console.log({ params})
  const { questions: apiQuestions } = useQuestions(params.testID)
  history.push('/tests/fast')
  console.log({ apiQuestions })
  return (
    <Box margin='auto'>
      <Flex
        borderRadius='10px'
        paddingTop='20px'
        h='100%'
        w='1140px'
        bg='#f9f9fc'
        flexDir='column'
      >
        <Flex
          alignItems='center'
          justifyContent='space-between'
          marginX='20px'
          dir='rtl'
        >
          <Text> اختبار الضبط التنفيذي </Text>
          <ReactCountdownClockownClock
            seconds={45}
            color='red'
            alpha={0.9}
            size={50}
            onComplete={() => console.log('time is up')}
          />
        </Flex>
        <Flex
          justifyContent='center'
          paddingBottom='100px'
          marginTop='30px'
          bg='#E4E6EF'
          paddingX='20px'
          h='500px'
          flexDir='column'
          dir='rtl'
        >
          <Flex
            padding='20px'
            marginTop='20px'
            justifyContent='center'
            w='100%'
            borderRadius='10px'
            bg='white'
            dir='rtl'
            height='60%'
            alignItems='center'
            flexDir='column'
          >
            {questions[currQuestionIndex] && (
              <Text fontSize='5xl' color={questions[currQuestionIndex].color}>
                {questions[currQuestionIndex].question}
              </Text>
            )}
          </Flex>
          <Grid marginTop='20px' templateColumns='1fr 1fr 1fr 1fr'>
            {questions[currQuestionIndex] &&
              questions[currQuestionIndex].answers.options.map(option => (
                <Box
                  as='buton'
                  cursor='pointer'
                  borderWidth='1px'
                  borderRadius='md'
                  boxShadow='md'
                  _hover={{
                    bg: '#68D391'
                  }}
                  bg={answers[currQuestionIndex] === option ? '#68D391' : null}
                  px={5}
                  py={3}
                  onClick={() => {
                    setAnswers({ ...answers, [currQuestionIndex]: option })
                  }}
                >
                  {option}
                </Box>
              ))}
          </Grid>
          <Flex width='50%' marginTop='20px'>
            <StartTestButton
              width='200px'
              type='next'
              buttonText='التالى'
              onClick={() => {
                if (currQuestionIndex <= questions.length - 1) {
                  const userAnswer = answers[currQuestionIndex]
                  if (
                    userAnswer === questions[currQuestionIndex].correctAnswer
                  ) {
                    setCount(count + 1)
                  } else {
                    setWrongAnswers(wrongAnswers + 1)
                  }
                  if (wrongAnswers === 5) {
                    history.push('/')
                  } else {
                    setCurrQuestionIndex(currQuestionIndex + 1)
                  }
                }
              }}
            />
          </Flex>
        </Flex>
      </Flex>
    </Box>
  )
}

export default StroopTest
