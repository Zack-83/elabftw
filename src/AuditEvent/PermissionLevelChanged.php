<?php

/**
 * @author Nicolas CARPi <nico-git@deltablot.email>
 * @copyright 2023 Nicolas CARPi
 * @see https://www.elabftw.net Official website
 * @license AGPL-3.0
 * @package elabftw
 */

declare(strict_types=1);

namespace Elabftw\AuditEvent;

use Elabftw\Enums\Users2TeamsTargets;
use Override;

final class PermissionLevelChanged extends AbstractUsers2TeamsModifiedEvent
{
    public function __construct(int $requesterUserid, private int $group, int $userid, private int $teamid)
    {
        parent::__construct($requesterUserid, $userid);
    }

    #[Override]
    public function getBody(): string
    {
        return sprintf(
            'User status was changed to %s in team %d',
            Users2TeamsTargets::from($this->group)->toHuman(),
            $this->teamid,
        );
    }
}
