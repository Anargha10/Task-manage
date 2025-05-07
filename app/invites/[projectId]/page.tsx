
// @ts-nocheck
'use server';

import { createClient } from '@/utils/supabase/server';
import { redirect, notFound } from 'next/navigation';

export default async function InvitePage({ params, searchParams }) {
  // Next.js now passes params & searchParams as promises in RSC
  const { projectId } = await params;
  const { role } = await searchParams;

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect(`/login?next=/invites/${projectId}?role=${role}`);
  }

  const { data: projectMember } = await supabase
    .from('project_members')
    .select('*')
    .eq('project_id', projectId)
    .eq('user_id', user.id)
    .eq('invitationStatus', 'invited')
    .maybeSingle();

  if (!projectMember) {
    notFound();
  }

  await supabase
    .from('project_members')
    .update({ invitationStatus: 'accepted', joined_at: new Date().toISOString() })
    .eq('project_id', projectId)
    .eq('user_id', user.id);

  redirect(`/projects/${projectId}`);
}
