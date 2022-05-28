import { User } from '@/types/user'

export type Article = {
    id: number
    name: string
    description?: string
    user: User
    created_at: string
    updated_at: string
}
