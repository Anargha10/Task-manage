import { createClient } from '@/utils/supabase/server';
import { redirect, notFound } from 'next/navigation';

interface InvitePageProps {
  params: { projectId: string };
  searchParams: { role: string };
}

export default async function InvitePage({ params, searchParams }: InvitePageProps) {
  const supabase = await createClient();
  const { projectId } = params;
  const { role } = searchParams;

  // Check auth status
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect(`/login?next=/invites/${projectId}?role=${role}`);
  }

  // Check if user was invited
  const { data: projectMember, error: memberCheckError } = await supabase
    .from('project_members')
    .select('*')
    .eq('project_id', projectId)
    .eq('user_id', user.id)
    .eq('invitationStatus', 'invited')
    .single();

  if (memberCheckError || !projectMember) {
    console.error('Invite invalid or not found:', memberCheckError?.message || 'No invitation found');
    notFound();
  }

  // Accept the invite
  const { error: updateError } = await supabase
    .from('project_members')
    .update({
      invitationStatus: 'accepted',
      joined_at: new Date().toISOString(),
    })
    .eq('project_id', projectId)
    .eq('user_id', user.id);

  if (updateError) {
    console.error('Failed to update invitation status:', updateError.message);
    notFound();
  }

  // Redirect to project dashboard
  redirect(`/projects/${projectId}`);
}
