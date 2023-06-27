import { useQuery } from '@tanstack/react-query'

import useUserService from '../../../services/user.service'

export const useProfile = () => {
	return useQuery(['get profile'], () => useUserService.getProfile(), {
		select: ({ data }) => data
	})
}
