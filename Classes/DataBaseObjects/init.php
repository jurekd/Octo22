<?php
require_once('../Classes/DataBaseObjects/table.php');
$GLOBALS['DataRoot'] = array(
    'users' => new DataTable('users'),
    'dictionary' => new DataTable('dictionary'),
    'courses' => new DataTable('course'),
    'modules' => new DataTable('module'),
    'tasks' => new DataTable('tasks'),
    'activity' => new DataTable('activity'),
    'logs' => new DataTable('logs'),
    'dialogs' => new DataTable('dialogs'),
    'audio' => new DataTable('audio'),
    'applications' => new DataTable('applications')
);

$GLOBALS['DataRoot']['users']->AddColumn('email', 'varchar', 100, false, 'display_name');
$GLOBALS['DataRoot']['users']->AddColumn('password', 'varchar', 100, false, 'display_name');
$GLOBALS['DataRoot']['users']->AddColumn('type', 'varchar', 100, false, 'display_name');
$GLOBALS['DataRoot']['users']->AddColumn('name', 'varchar', 100, false, 'display_name');
$GLOBALS['DataRoot']['users']->AddColumn('surname', 'varchar', 100, false, 'display_name');
$GLOBALS['DataRoot']['users']->AddColumn('avatar', 'varchar', 100, false, 'display_name');
$GLOBALS['DataRoot']['users']->AddColumn('teacher', 'id', 11, false, 'display_name');
$GLOBALS['DataRoot']['users']->AddColumn('basic', 'varchar', 11, false, 'display_name');

$GLOBALS['DataRoot']['dictionary']->AddColumn('name', 'varchar', 100, false, 'display_name');
$GLOBALS['DataRoot']['dictionary']->AddColumn('page', 'varchar', 100, false, 'display_name');
$GLOBALS['DataRoot']['dictionary']->AddColumn('content', 'text', 0, false, 'display_name');

$GLOBALS['DataRoot']['audio']->AddColumn('task_id', 'int', 11, false, 'display_name');
$GLOBALS['DataRoot']['audio']->AddColumn('link', 'varchar', 100, false, 'display_name');

$GLOBALS['DataRoot']['courses']->AddColumn('pathway_id', 'int', 11, false, 'display_name');
$GLOBALS['DataRoot']['courses']->AddColumn('type', 'varchar', 100, false, 'display_name');
$GLOBALS['DataRoot']['courses']->AddColumn('name', 'varchar', 100, false, 'display_name');
$GLOBALS['DataRoot']['courses']->AddColumn('description', 'text', 0, false, 'display_name');

$GLOBALS['DataRoot']['applications']->AddColumn('name', 'varchar', 11, false, 'display_name');
$GLOBALS['DataRoot']['applications']->AddColumn('intelect', 'varchar', 100, false, 'display_name');
$GLOBALS['DataRoot']['applications']->AddColumn('task_id', 'int', 100, false, 'display_name');
$GLOBALS['DataRoot']['applications']->AddColumn('config', 'text', 0, false, 'display_name');
$GLOBALS['DataRoot']['applications']->AddColumn('result', 'text', 0, false, 'display_name');

$GLOBALS['DataRoot']['dialogs']->AddColumn('task_id', 'int', 11, false, 'display_name');
$GLOBALS['DataRoot']['dialogs']->AddColumn('type', 'varchar', 100, false, 'display_name');
$GLOBALS['DataRoot']['dialogs']->AddColumn('content', 'text', 100, false, 'display_name');
$GLOBALS['DataRoot']['dialogs']->AddColumn('profil', 'varchar', 100, false, 'display_name');

$GLOBALS['DataRoot']['modules']->AddColumn('pathway_id', 'int', 11, false, 'display_name');
$GLOBALS['DataRoot']['modules']->AddColumn('course_id', 'varchar', 100, false, 'display_name');
$GLOBALS['DataRoot']['modules']->AddColumn('type', 'varchar', 100, false, 'display_name');
$GLOBALS['DataRoot']['modules']->AddColumn('name', 'varchar', 100, false, 'display_name');
$GLOBALS['DataRoot']['modules']->AddColumn('description', 'text', 0, false, 'display_name');

$GLOBALS['DataRoot']['tasks']->AddColumn('reference_id', 'int', 11, true, 'resources_id');
$GLOBALS['DataRoot']['tasks']->AddColumn('content', 'richtext', 0, true, 'content');
$GLOBALS['DataRoot']['tasks']->AddColumn('answers', 'text', 0, false, 'display_name');
$GLOBALS['DataRoot']['tasks']->AddColumn('type', 'varchar', 100, false, 'display_name');
$GLOBALS['DataRoot']['tasks']->AddColumn('correct_answer', 'text', 0, false, 'display_name');
$GLOBALS['DataRoot']['tasks']->AddColumn('name', 'varchar', 100, true, 'display_name');
$GLOBALS['DataRoot']['tasks']->AddColumn('module_id', 'varchar', 100, true, 'module_id');
$GLOBALS['DataRoot']['tasks']->AddColumn('facebook_link', 'varchar', 200, true, 'facebook_link');
$GLOBALS['DataRoot']['tasks']->AddColumn('avatar_dialog', 'varchar', 100, true, 'avatar_dialog');

$GLOBALS['DataRoot']['activity']->AddColumn('user_id', 'int', 11, false, 'display_name');
$GLOBALS['DataRoot']['activity']->AddColumn('course_id', 'int', 11, false, 'display_name');
$GLOBALS['DataRoot']['activity']->AddColumn('course_status', 'varchar', 100, false, 'display_name');
$GLOBALS['DataRoot']['activity']->AddColumn('course_time_start', 'datetime', 0, false, 'display_name');
$GLOBALS['DataRoot']['activity']->AddColumn('course_time_end', 'datetime', 0, false, 'display_name');
$GLOBALS['DataRoot']['activity']->AddColumn('course_result', 'varchar', 100, false, 'display_name');
$GLOBALS['DataRoot']['activity']->AddColumn('course_number_of_enter', 'int', 11, false, 'display_name');
$GLOBALS['DataRoot']['activity']->AddColumn('content', 'text', 0, false, 'display_name');

$GLOBALS['DataRoot']['logs']->AddColumn('date', 'datetime', 0, false, 'display_name');
$GLOBALS['DataRoot']['logs']->AddColumn('user_id', 'int', 11, false, 'display_name');
$GLOBALS['DataRoot']['logs']->AddColumn('event', 'varchar', 100, false, 'display_name');
$GLOBALS['DataRoot']['logs']->AddColumn('content', 'text', 0, false, 'display_name');
$GLOBALS['DataRoot']['logs']->AddColumn('session_key', 'text', 100, false, 'display_name');
?>