import { z } from 'zod';
import { Button } from '@repo/ui/components/button';
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
	zodResolver,
	useForm,
} from '@repo/ui/components/form';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@repo/ui/components/select';
import { toast } from '@repo/ui/components/use-toast';

const FormSchema = z.object({
	email: z
		.string({
			required_error: 'Please select an email to display.',
		})
		.email(),
});

export function SelectForm() {
	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
	});

	return (
		<Form {...form}>
			<form className="w-2/3 space-y-6">
				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Email</FormLabel>
							<Select onValueChange={field.onChange} defaultValue={field.value} name="field">
								<FormControl>
									<SelectTrigger>
										<SelectValue placeholder="Select a verified email to display" />
									</SelectTrigger>
								</FormControl>
								<SelectContent>
									<SelectItem value="m@example.com">m@example.com</SelectItem>
									<SelectItem value="m@google.com">m@google.com</SelectItem>
									<SelectItem value="m@support.com">m@support.com</SelectItem>
								</SelectContent>
							</Select>
							<FormDescription>You can manage email addresses in your </FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button type="submit">Submit</Button>
			</form>
		</Form>
	);
}
