
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar, Cell } from 'recharts'

const ScoreCard = ({ score }) => {

  const color = (num) => {
    if (num >= 80) {
      return '#4caf50'
    }
    if (num >= 60 && num < 80) {
      return '#ff9800'
    }
    return '#f44336'
  }


  const data = [
    {
      "name": "General Info",
      "num": score.generalInfo,
      color: color(score.generalInfo)
    },
    {
      "name": "Meta",
      "num": score.meta,
      color: color(score.meta)
    },
    {
      "name": "Structure",
      "num": score.structure,
      color: color(score.structure)
    },
    {
      "name": "Page Speed",
      "num": score.pageSpeed,
      color: color(score.pageSpeed)
    },
    {
      "name": "Social Media",
      "num": score.socialMedia,
      color: color(score.socialMedia)
    },
    {
      "name": "Mobile Friendly",
      "num": score.mobileFriendly,
      color: color(score.mobileFriendly)
    },
  ]

  return (
    // <>
    //   <ScoreContainer >
    //     <ScoreContainerFirstRow>
    //       <CardContainer bgColor={color(score.generalInfo)}>
    //         <CardScore >{score.generalInfo}</CardScore>
    //         <CardTitle >General Info</CardTitle>
    //       </CardContainer>
    //       <CardContainer bgColor={color(score.meta)}>
    //         <CardScore >{score.meta}</CardScore>
    //         <CardTitle >Meta</CardTitle>
    //       </CardContainer>
    //       <CardContainer bgColor={color(score.structure)}>
    //         <CardScore >{score.structure}</CardScore>
    //         <CardTitle >Structure</CardTitle>
    //       </CardContainer>
    //     </ScoreContainerFirstRow>
    //     <ScoreContainerFirstRow>

    //       <CardContainer bgColor={color(score.pageSpeed)}>
    //         <CardScore >{score.pageSpeed}</CardScore>
    //         <CardTitle >PageSpeed</CardTitle>
    //       </CardContainer>
    //       <CardContainer bgColor={color(score.socialMedia)}>
    //         <CardScore >{score.socialMedia}</CardScore>
    //         <CardTitle >Social Media</CardTitle>
    //       </CardContainer>
    //       <CardContainer bgColor={color(score.mobileFriendly)}>
    //         <CardScore >{score.mobileFriendly}</CardScore>
    //         <CardTitle >Mobile Friendly</CardTitle>
    //       </CardContainer>

    //     </ScoreContainerFirstRow>
    //   </ScoreContainer>
    // </>
    <>
      <BarChart width={830} height={250} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" tick={{ fontWeight: 'bold' }} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="num" barSize={20}>
          {data.map((entry, i) => (
            <Cell key={i} fill={entry.color} />
          ))}
        </Bar>

      </BarChart></>



  )
}

export default ScoreCard
