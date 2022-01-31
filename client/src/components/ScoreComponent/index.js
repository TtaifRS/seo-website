
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar, Cell } from 'recharts'
import { ScoreContainer } from './ScoreStyles'

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
      "score": score.generalInfo,
      color: color(score.generalInfo)
    },
    {
      "name": "Meta",
      "score": score.meta,
      color: color(score.meta)
    },
    {
      "name": "Structure",
      "score": score.structure,
      color: color(score.structure)
    },
    {
      "name": "Page Speed",
      "score": score.pageSpeed,
      color: color(score.pageSpeed)
    },
    {
      "name": "Social Media",
      "score": score.socialMedia,
      color: color(score.socialMedia)
    },
    {
      "name": "Mobile Friendly",
      "score": score.mobileFriendly,
      color: color(score.mobileFriendly)
    },
  ]

  return (
    <>
      <ScoreContainer>

        <BarChart width={830} height={250} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" tick={{ fontWeight: 'bold' }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="score" barSize={20}>
            {data.map((entry, i) => (
              <Cell key={i} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>


      </ScoreContainer>



    </>



  )
}

export default ScoreCard
