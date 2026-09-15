CREATE POLICY "No direct client access to onboarding requests"
ON public.onboarding_requests
FOR ALL
TO anon, authenticated
USING (false)
WITH CHECK (false);