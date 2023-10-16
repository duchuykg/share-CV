import { useQuery } from "@tanstack/react-query"
import { useRouter } from "next/router"
import { queryKey } from "src/constants/queryKey"
import { PostDetail } from "src/types"
import { LINK_TO_REGISTER } from "src/constants"

const usePostQuery = () => {
  const router = useRouter()
  const { slug } = router.query
  const { data } = useQuery<PostDetail>({
    queryKey: queryKey.post(`${slug}`),
    enabled: false,
  })

  if (slug === LINK_TO_REGISTER) {
    const datafordirect = {
      id: '',
      date: { start_date: '2022-06-09' },
      type: [  ],
      slug: 'register',
      category: [ '😎 Daily' ],
      author: [],
      title: '',
      status: [  ],
      createdTime: 'Sat Sep 02 2023 07:57:04 GMT+0700 (Indochina Time)',
      fullWidth: false,
      experience: '',
      summary: "",
      thumbnail: "",
      recordMap: ""
    }
    return datafordirect;
  }
  else if (data?.recordMap === "") return undefined
  return data
}

export default usePostQuery
