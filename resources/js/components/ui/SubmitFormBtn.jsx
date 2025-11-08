import { Save } from "lucide-react"
import { Button } from '@/components/ui/button';

export default function ({ processing = false }) {
    return (
        <>
            <div className="flex justify-end">
                <Button
                    type="submit"
                    disabled={processing}
                    className="flex items-center rounded-lg bg-blue-600 px-6 py-2 font-medium text-white shadow-md transition-colors duration-200 hover:bg-blue-700"
                >
                    <Save className="mr-2 h-5 w-5" />
                    {processing
                        ? 'Submit...'
                        : 'Submit'}
                </Button>
            </div>
        </>
    )
}