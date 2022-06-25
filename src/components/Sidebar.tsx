import { gql, useQuery } from "@apollo/client";
import Lesson from "./Lesson";

const GET_LESSONS_QUERY = gql`
  query{
    lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
      availableAt
      lessonType
      slug
      title
      id
    }
  }
`

type GetLessonsQueryResponse = {
  lessons: {
    id: string
    title: string
    slug: string
    lessonType: 'live' | 'class'
    availableAt: Date
  }[]
}

export default function Sidebar() {
  const { data } = useQuery<GetLessonsQueryResponse>(GET_LESSONS_QUERY);
  console.log(data)
  return (
    <aside className="w-[348px] bg-gray-700 p-6 border-l border-gray-600">
          <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
              Cronograma de aulas
          </span>

          <div className="flex flex-col gap-8">
            <Lesson
                type="live"
                availableAt={new Date()}
                title="Abertura do evento Ignite labs"
                slug="abertura-do-evento-ignite-labs"
              />
          </div>
    </aside>
  )
}
